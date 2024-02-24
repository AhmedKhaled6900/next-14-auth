

// import GetBillboard from "@/actions/get-billboard";
// import getBillboard from "@/actions/get-billboard";
import getBillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboards from "@/components/ui/billboard";
// import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

// export const revalidate = 0;

const HomePage = async  () => {
  // const [billboards, setBillboards] = useState([]);
  // const [error, setError] = useState(null);
  // const products = await getProducts({ isFeatured: true });
  // const billboard = await ("0e12e5cf-29ab-4529-b8d5-c5371dae1f7b");

    // const storeId = '0e12e5cf-29ab-4529-b8d5-c5371dae1f7b'; // Replace with actual store ID
  
    // const products = await getProducts({ isFeatured: true });

const products = await getProducts({
  isFeatured: false,
  colorId: ""
})

const billboard =  await getBillboard("6a066fe9-75f6-489c-8f63-587936eb931f")

  return (
    <Container>
      <div className="space-y-10 pb-10">
        home
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
