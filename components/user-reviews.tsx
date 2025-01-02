
// "use client"
// import { format } from "date-fns";

// import Image from "next/image";
// import avatar from "@/public/images.png";
// import { Product, Review } from "@/types";
// import { useSession } from "next-auth/react";
// import { Trash } from "lucide-react";
// import { Button } from "./ui/button";
// import { useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { AlertModal } from "./modals/alert-modal";
// interface ReviewProps {
//   product: Product
// }

// const UserReview: React.FC<ReviewProps> = ({ product }) => {
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const session = useSession()
//   const params = useParams()
//   const [deleteReviewId, setDeleteReviewId] = useState<string | null>(null); // State to keep track of review to be deleted


//   const router = useRouter()
//   const onDelete = async () => {
//     try {
//       setLoading(true);
//       await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/reviews/${deleteReviewId}`);
//       router.refresh();
//       //   router.push(`/dashboard/${params.storeId}/billboards`);
//       toast.success('Review deleted.');
//     } catch (error: any) {
//       //   toast.error('Make sure you removed all categories using this billboard first.');
//     } finally {
//       setLoading(false);
//       setOpen(false);
//     }
//   }
//   // console.log(session.data?.user.id)
//   return (<>
//     <AlertModal
//       isOpen={open}
//       onClose={() => setOpen(false)}
//       onConfirm={onDelete}
//       loading={loading}
//     />
//     <div>
//       <h1 className="text-2xl font-semibold">
//         Our customers reviews
//       </h1>
//     </div>



//     {
//       product.reviews.length === 0 ?
//         <div>
//           <h1 className="flex justify-center items-center my-5">
//             No reviews

//           </h1>
//         <hr className="my-5" />

//         </div> 
//         :

//         <>{product.reviews.map((review: Review) => (
//           <><div key={review.id} className="my-5 gap-x-5 gap-y-6">
//             <div className=" flex items-center justify-between   rounded-full ">
//               <div className="flex items-center gap-x-2">
//                 <div>

//                 {review?.user?.image == null ?
//                   <Image src={avatar} width={50} height={50} alt="user image" className="rounded-full" /> :
//                   <Image src={`${review.user.image}`}
//                     width={50} height={50} alt={"user image"} className="rounded-full" />}
//                 </div>

// <div className=" font-semibold text-lg">

// <h3>{review?.user?.name}</h3>
// </div>
//               </div>

            
//               <div>

//                 <h3>{format(new Date(review.createdAt), "d/ M/ y")}</h3>

//               </div>

//             </div>


          
//           </div>

//             <div className=" flex items-center justify-between">


//               <p>
//                 {review.comment}

//               </p>

//               {
//               session.data?.user.id === review.userId && <div className="mt-3">
//                 <Button
//                   // disabled={loading}
//                   variant="destructive"
//                   size="sm"
//                   onClick={() => { setOpen(true); setDeleteReviewId(review.id) } // Set reviewId to state
//                   }
//                 >
//                   <Trash className="h-4 w-4" />
//                 </Button>

//               </div>
//             }
//             </div>
//             <hr className="my-10" />


//           </>



//         ))} </>
//     }

//   </>
//   );
// }

// export default UserReview;
"use client";

import { format } from "date-fns";
import Image from "next/image";
import avatar from "@/public/images.png";
import { Product, Review } from "@/types";
import { useSession } from "next-auth/react";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { AlertModal } from "./modals/alert-modal";
import StarRating from "./ui/star-rating";

interface ReviewProps {
  product: Product;
}

const UserReview: React.FC<ReviewProps> = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const session = useSession();
  const [deleteReviewId, setDeleteReviewId] = useState<string | null>(null);

  const router = useRouter();

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/reviews/${deleteReviewId}`);
      router.refresh();
      toast.success("Review deleted.");
    } catch (error: any) {
      toast.error("Failed to delete review.");
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div>
        <h1 className="text-2xl font-semibold">Our customers reviews</h1>
      </div>

      {product.reviews.length === 0 ? (
        <div>
          <h1 className="flex justify-center items-center my-5">No reviews</h1>
          <hr className="my-5" />
        </div>
      ) : (
        <>
          {product.reviews.map((review: Review) => (
            <div key={review.id} className="my-5 gap-x-5 gap-y-6">
              {/* User Details */}
              <div className="flex items-center justify-between rounded-full">
                <div className="flex items-center gap-x-2">
                  <div>
                    {review?.user?.image == null ? (
                      <Image
                        src={avatar}
                        width={50}
                        height={50}
                        alt="user image"
                        className="rounded-full"
                      />
                    ) : (
                      <Image
                        src={`${review.user.image}`}
                        width={50}
                        height={50}
                        alt="user image"
                        className="rounded-full"
                      />
                    )}
                  </div>
                  <div className="font-semibold text-lg">
                    <h3>{review?.user?.name}</h3>
                  </div>
                </div>
                <div>
                  <h3>{format(new Date(review.createdAt), "d/ M/ y")}</h3>
                </div>
              </div>

              {/* Rating with Stars */}
              <div className="my-2">
                <StarRating value={review.rating} readOnly />
              </div>

              {/* Comment Section */}
              <div className="flex items-center justify-between">
                <p>{review.comment}</p>
                {session.data?.user.id === review.userId && (
                  <div className="mt-3">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        setOpen(true);
                        setDeleteReviewId(review.id);
                      }}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
              <hr className="my-10" />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default UserReview;
