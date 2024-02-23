
import { Category } from "@/types";

import useSWR from 'swr'
import Link from "next/link";


import Container from "@/components/ui/container";
import NavbarActions from "./ui/navbar-actions";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import { useEffect, useState } from "react";
import categories from "@/data/categories";
import Navbar from "./header";
import getBillboard from "@/actions/get-billboard";




 const  TheMainNavbar =  async ()=> { 
const categories =await getCategories();
// const billboard =  await getBillboard("6a066fe9-75f6-489c-8f63-587936eb931f")
// console.log(billboard)
  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <Navbar data={categories} /> 
          {/* <NavbarActions />  */}
        </div>
      </Container>
    </div>
  );
};
 
export default TheMainNavbar
