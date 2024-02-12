import { redirect } from 'next/navigation';
import {db} from '@/lib/db';
import { auth } from '@/auth';
import { MainNavbar } from '../../(protectedRoutes)/_components/main-nav';
import Navbar from '../_dashboard-components/navbar';
import { ModalProvider } from '@/providers/modal-provider';

export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  const  userId  = await auth();
  if (userId?.user.role !== "ADMIN") {
    redirect('/');
  }

  const store = await db.store.findFirst({ 
    where: {
      id: params.storeId,
      userId:userId.user.id
      }
   });
  //  const storeModal = useStoreModal();

  //  if (!store){
  //   storeModal.onOpen();
  //  }

 
  return (
    <>
    <ModalProvider></ModalProvider>
          <Navbar/>
    {/* <MainNavbar></MainNavbar> */}
      {children}
    </>
  );
};
