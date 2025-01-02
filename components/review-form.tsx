// "use client"
// import { z } from "zod";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Product, Review } from "@/types";
// import { useRouter ,useParams } from "next/navigation";
// import axios from "axios";

// import { toast } from "react-hot-toast"
// import { useState } from "react";
// // import { Button } from "../ui/button";
// import { useSession } from "next-auth/react";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";



// const formSchema = z.object({
//     comment : z.string().min(2),
//     rating : z.string().min(1),
// })
// type ReviewFormValues = z.infer<typeof formSchema>

// interface ReviewFormProps {
//   data: Product | null;
//   //  data: Review | null;
//   //  productId:string
//   //  userId:string
//   //  rating:number
//   //  comment:string

   
   

//   };
// const ReviewForm : React.FC<ReviewFormProps> = ({data }) => {
// const router = useRouter()
// const params= useParams()
// // console.log(params)
// const [loading, setLoading] = useState(false);

//     const form = useForm<ReviewFormValues>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             comment:"",
//             rating:"",
          
//         }
//       });
//       const productId = data?.id
//       const userId = useSession().data?.user.id

//       const onSubmit = async (data: ReviewFormValues) => {
//         try {
//           setLoading(true);
          
//             await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, {...data , rating:Number(data.rating), productId, userId});
      
          
//           router.refresh();
//         //   router.push(`/dashboard/${params.storeId}/reviews`);
//           toast.success("Review submitted");
//         } catch (error: any) {
//           toast.error('Something went wrong.');
//         } finally {
//           setLoading(false);
//         }
//       };
//     return ( 
//         <div className="mt-5  sm:mt-16 sm:px-0 lg:mt-0">
//                               <h1 className="my-5 font-semibold text-2xl">
//                       Leave comment
//                     </h1>
//            <Form {...form}>
//            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
//            <FormField
//               control={form.control}
//               name="comment"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>
//                   your comment
//                   </FormLabel>
//                   <FormControl>
//                   <Input placeholder="Your comment" {...field} />
                   
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//            <FormField
//               control={form.control}
//               name="rating"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Rate</FormLabel>
//                   <FormControl>
//                   <Input placeholder="Your rate" {...field} />
                   
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//                <Button disabled={loading} className="ml-auto" type="submit">
//           Submit review
//           </Button>
//            </form>
//            </Form>
//         </div>
//      );
// }
 
// export default ReviewForm;
"use client";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@/types";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import StarRating from "./ui/star-rating";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  comment: z.string().min(2, { message: "Comment must be at least 2 characters." }),
  rating: z.number().min(1, { message: "Rating must be at least 1 star." }),
});

type ReviewFormValues = z.infer<typeof formSchema>;

interface ReviewFormProps {
  data: Product | null;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(false);

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
      rating: 0,
     
    },
  });

  const productId = data?.id;
  const userId = useSession().data?.user.id;

  const onSubmit = async (data: ReviewFormValues) => {
    try {
      setLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, {
        ...data,
        productId,
        userId,
      });
      router.refresh();
      toast.success("Review submitted");
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-5 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="my-5 font-semibold text-2xl">Leave a Comment</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
          {/* Comment Field */}
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Comment</FormLabel>
                <FormControl>
                  <Input placeholder="Your comment" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Star Rating Field */}
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rate</FormLabel>
                <FormControl>
                  <StarRating value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button disabled={loading} className="ml-auto" type="submit">
            Submit Review
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ReviewForm;
