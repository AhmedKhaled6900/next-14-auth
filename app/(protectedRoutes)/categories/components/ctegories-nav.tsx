"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from "next/link"
  
export default function 
CategoriesNav( { data }: { data: any } ) {
  return (
    <div>
 <NavigationMenu>
  <NavigationMenuList className="flex gap-x-2 flex-col justify-end "  >
        {
          data.map((item: any) => {
            return (
            <NavigationMenuItem>

              <Link href={`/categories/${item.id}`} >
                {item.name}
              </Link>
    </NavigationMenuItem>
            )
          })
        }

  {/* <Link href={"/"} >
    home
  </Link> */}
      {/* <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent> */}
  </NavigationMenuList>
</NavigationMenu>

    </div>
  )
}
