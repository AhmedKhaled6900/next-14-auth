
import { Category } from "@/types";

import Link from "next/link";


import Container from "@/components/ui/container";
import Navbar from "./header";
import getCategories from "@/data/get-categories";
import { ThemeToggle } from "@/app/dashboard/(dashboard)/_dashboard-components/theme-toggle";

 const  TheMainNavbar = async ()=> { 
const categories = await getCategories();

  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          {/* <NavbarActions />  */}
          {/* <ThemeToggle /> */}

          <Navbar data={categories} /> 
        </div>
      </Container>
    </div>
  );
};
 
export default TheMainNavbar
