"use client";

import {StoreModal} from "@/components/modals/store-modal";
import { useEffect, useState } from "react";

// import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // },[]);

  if (!isMounted) {
   setIsMounted(true);
  }

  return (
    <>
      <StoreModal />
    </>
  );
}
