import { redirect } from 'next/navigation';
import {db} from '@/lib/db';
import { auth } from '@/auth';
import { ModalProvider } from '@/providers/modal-provider';
import { Metadata, ResolvingMetadata } from 'next';
import DashboardNavbar from '../_dashboard-components/dashboard-nav';
import { MainNav } from '../_dashboard-components/main-nav';

export async function generateMetadata(
   params : {
    storeId: string
   },
): Promise<Metadata> {
  const id = params.storeId

  const store = await db.store.findFirst({ 
    where: {
      id: params.storeId,
      }
   });
  return {
    title: `Store - ${store?.name}`
    ,
    openGraph: {
      title: store?.name,
    },
  }
}

export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  const  userId  = await auth();
  if (!userId) {
    redirect('/');
  }
  const store = await db.store.findFirst({ 
    where: {
      id: params.storeId,
      userId:userId.user.id,
      }
   });
   if (!store){
    redirect("/")}
  return (
    <>
          <DashboardNavbar/>
        <MainNav className="mx-6" />
          
      {/* <StoreSwitcher items={[]}></StoreSwitcher> */}
    {/* <ModalProvider/>  */}
      {children}
    </>
  );
};
