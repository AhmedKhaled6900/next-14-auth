"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

import Currency  from "@/components/ui/currency";
import IconButton  from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/dashboard/hooks/use-preview-modal";
import useCart from "@/hooks/dashboard/hooks/use-cart";
import { Product } from "@/types";

interface ProductCard {
  data: Product
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  
  return ( 
    <div onClick={handleClick} className=" group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image 
          src={data.images?.[0]?.url} 
          alt="" 
          fill
          sizes="(100vw, 100vh)"
          className="aspect-square object-cover rounded-md"
        />
        {/* <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton 
              onClick={onPreview} 
              icon={<Expand size={20}  />}
            />
            <IconButton
              onClick={onAddToCart} 
              icon={<ShoppingCart size={20}  />} 
            />
          </div>
        </div> */}
      </div>
      {/* Description */}
      <div className="grid grid-cols-2 gap-1 ">
        <p className="font-semibold text-md whitespace-nowrap">{data.name}</p>
        <div className=" flex items-center px-2 justify-end">
        <div className="h-6 w-6  rounded-full border flex  items-end justify-end " style={{ backgroundColor: data?.color?.value }} />

        </div>

        {/* <p className="text-sm text-muted-foreground">{data.category?.name}</p> */}

        <div className="flex items-center justify-start">
        <Currency value={data?.price} />

      </div>
    
      <div className="flex items-center justify-end" > 
      <IconButton
              onClick={onAddToCart} 
              icon={<ShoppingCart size={20}  />} 
            />
      </div>

      </div>
      {/* Price & Reiew */}
 
    </div>
  );
}

export default ProductCard;
