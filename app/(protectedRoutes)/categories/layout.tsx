import Container from "@/components/ui/container";
import CategoriesNav from "./components/ctegories-nav";
import getCategories from "@/data/get-categories";
import { Separator } from "@/components/ui/separator";

export default async function CategoriesLayout ({ children }: { children: React.ReactNode }) {

    const categories = await getCategories();

    return <>
    <Container>

    <div className="grid grid-cols-8 gap-5 ">

 
{/* <div className="col-span-1 h-full flex flex-col  ">

<CategoriesNav data={categories}>
    
</CategoriesNav>

</div> */}
{/* <Separator orientation="vertical"   ></Separator> */}
  

<div className="col-span-7 h-full">
{children}
</div>
    


    </div>
    </Container>
    
    </>
}