

import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboards from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async  () => {

const products = await getProducts({
  isFeatured: false,
  colorId: ""
})

const billboard =  await getBillboard("f853092f-30b2-4d36-95fe-899aba73961b")
// 0a296a4c-5c04-4682-9131-50b9fbec6aec

  return (
    <Container>

      <div className="space-y-10 pb-10  ">
        <Billboards
          data={ billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )


};

export default HomePage;
