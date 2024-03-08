import ProductList from '@/components/product-list'
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Container from '@/components/ui/container';
import { Metadata, ResolvingMetadata } from 'next';

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  },
}
export async function generateMetadata(
  { params,  }: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.productId
  const product = await getProduct(id);
  return {
    title: `Store - ${product?.name}`
    ,
    openGraph: {
      title: product?.name,
    },
  }
}
const ProductPage: React.FC<ProductPageProps> = async ({ 
  params
 }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
    isFeatured: true,
    colorId: ''
  });

  if (!product) {
    return null;
  }

  return (
    <div className="">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>  
  )
}

export default ProductPage;
