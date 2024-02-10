"use client"

import { admin } from "@/actions/admin";
import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/dashboard/use-store-modal";
import { useCurrentRole } from "@/hooks/use-current-role";
import { serverAction } from "@/lib/admin";
import { NextURL } from "next/dist/server/web/next-url";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
const DashboardPage =  () => {
  const session =  useCurrentRole();
  const userRole = session
  if(userRole !== "ADMIN") {
    // toast.error("Unauthorized access: User does not have admin privileges.")

redirect(("/settings"))
  }
  console.log(userRole);
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
    
}
export default DashboardPage