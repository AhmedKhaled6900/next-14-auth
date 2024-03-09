import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Container from "./ui/container";
import { Separator } from "@radix-ui/react-separator";
// import { Separator } from "@radix-ui/react-dropdown-menu";

interface ProductListProps {
  title: string;
  items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items
}) => {
  // return (
  //   <div className="space-y-4">
  //     <h3 className="font-bold text-3xl">{title}</h3>
  //     {items.length === 0 && <NoResults />}


  //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  //       {items.map((item) => (
  //         <ProductCard key={item.id} data={item} />
  //       ))}
  //     </div>
  //   </div>
  //  );
return(
  <Container>
    <h3 className="font-bold text-3xl my-5 ">{title}</h3>
{/* <Separator/> */}
  <Carousel className= "w-full " >
  <CarouselContent className="w-full">
       {items.map((item) => (
    <CarouselItem className="basis-2/3">
        <ProductCard key={item.id} data={item} />

    </CarouselItem>

       ))}
    {/* <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem> */}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext className="" />
</Carousel>
</Container>

)

}
 
export default ProductList;
