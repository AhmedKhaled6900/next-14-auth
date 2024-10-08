"use client";

import { ShoppingCart } from "lucide-react";

import Currency  from "@/components/ui/currency";
import { Product } from "@/types";
import useCart from "@/hooks/dashboard/hooks/use-cart";
import { Button } from "./ui/button";

interface InfoProps {
  data: Product
};

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  }

  return ( 
    <div>
      <h1 className="text-3xl font-bold ">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl ">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold ">Size:</h3>
          <div>
            {data?.size?.value}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold ">Color:</h3>
          <div className="h-6 w-6 rounded-full border " style={{ backgroundColor: data?.color?.value }} />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
      <hr className="my-5" />
<div className="flex flex-col gap-y-6">
<p className="text-2xl font-semibold ">
  Description
  </p>
<p>{data?.description}</p>

</div>
    </div>
  );
}
 
export default Info;
