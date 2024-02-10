

import { ModalProvider } from '@/providers/modal-provider';
import DashboardNavbar from './_dashboard-components/dashboard-nav';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { useCurrentRole } from '@/hooks/use-current-role';
// import prismadb from '@/lib/prismadb';

export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
//   const  userrole  = useCurrentRole();
// console.log(userrole)
  // if (userrole) {
  //   redirect('/sign-in');
  // }

//   const store = await prismadb.store.findFirst({ 
//     where: {
//       id: params.storeId,
//       userId,
//     }
//    });

//   if (!store) {
//     redirect('/');
//   };

  return (
    <>
    <ModalProvider/>
    <DashboardNavbar/>
      {children}
    </>
  );
};
