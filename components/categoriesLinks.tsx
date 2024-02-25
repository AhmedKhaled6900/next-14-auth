
import { Category } from "@/types";

import Link from "next/link";


import Container from "@/components/ui/container";
import NavbarActions from "./ui/navbar-actions";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import Navbar from "./header";




 const  TheMainNavbar =  async ()=> { 
const categories =await getCategories();

  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          {/* <NavbarActions />  */}

          <Navbar data={categories} /> 
        </div>
      </Container>
    </div>
  );
};
 
export default TheMainNavbar
