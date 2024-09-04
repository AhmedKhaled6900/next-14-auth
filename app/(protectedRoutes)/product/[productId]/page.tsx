import ProductList from '@/components/product-list'
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Container from '@/components/ui/container';
import { Metadata, ResolvingMetadata } from 'next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from '@/components/ui/product-card';
import ReviewForm from '@/components/review-form';
import UserReview from '@/components/user-reviews';
export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  },
}

type orientation= "vertical" | "horizontal" | undefined
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
    colorId: '',
  
  });
console.log(product)
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
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
    <ReviewForm data={product}></ReviewForm>
</div>
          </div>
          <hr className="my-10" />

          <UserReview product={product}>

</UserReview>

      <h3 className="font-bold text-3xl"> Suggested Products</h3>

        <div className="my-5">
        <Carousel className= " " >
  <CarouselContent className=" ">
       {suggestedProducts.map((item) => (
    <CarouselItem key={item.id} className=" md:basis-1/2 lg:basis-1/3 ">
        <ProductCard key={item.id} data={item} />

    </CarouselItem>

       ))}
    {/* <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem> */}
  </CarouselContent>
  <CarouselPrevious className="m-10 w-20 h-20 z-100"  />
  <CarouselNext className="m-10" />
</Carousel>



          {/* <ProductList title="Related Items" items={suggestedProducts} /> */}
          </div>
        </div>
      </Container>
    </div>  
  )
}

export default ProductPage;
