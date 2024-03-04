// import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import StoreSwitcher from "./store-switcher";
import { MainNav } from "./main-nav";
import { ThemeToggle } from "./theme-toggle";
import {db} from "@/lib/db";
import { auth } from "@/auth";

const Navbar = async () => {
  const  userId = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const stores = await  db.store.findMany({
    where: {
      userId:userId.user.id
    }
  });

  return ( 
    <div className="border">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          {/* <UserButton afterSignOutUrl="/" /> */}
        </div>
      </div>
    </div>
  );
};
 
export default Navbar;
