"use client"

import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/dashboard/use-store-modal";
import { useEffect } from "react";
const DashboardPage = () => {

    const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
          
            {/* <Modal
              title="title"
              description="description" 
              onClose = {() => console.log("close")}
              isOpen = {true}
            >

                children
            </Modal> */}
 
    
}
export default DashboardPage