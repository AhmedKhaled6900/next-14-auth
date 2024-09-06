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
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}

      {/* <h3 className="font-bold text-3xl">{title}</h3> */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
   );

//   <Carousel className= " " >
//   <CarouselContent className="">
//        {items.map((item) => (
//     <CarouselItem className="basis-2/3">
//         <ProductCard key={item.id} data={item} />

//     </CarouselItem>

//        ))}
//     {/* <CarouselItem>...</CarouselItem>
//     <CarouselItem>...</CarouselItem>
//     <CarouselItem>...</CarouselItem> */}
//   </CarouselContent>
//   <CarouselPrevious className="" />
//   <CarouselNext className="" />
// </Carousel>


// )

}
 
export default ProductList;
