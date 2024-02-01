"use client "
import { CardWrapper } from "./cadr-wrapper"
import { BeatLoader } from "react-spinners"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { newVerification } from "@/actions/new-verification"
import { FormSuccess } from "../form-success"
import { FormError } from "../form-error"

export  const NewVerificationFormPage =()=>{
const [error, setError] = useState<string | undefined>();
const [success, setSuccess] = useState<string | undefined>();

    const seearchParams = useSearchParams();
    const token = seearchParams.get(`token`);
    
    
    const onSubmit = useCallback(()=>{
        console.log(token)
      if(success || error) return ;
        if(!token)  {
            setError("Missing token")
            return;
        }

newVerification(token)
.then((data)=>{
    setSuccess(data.success),
    setError(data.Error)
})
.catch(()=>{
    setError("some thing went wrong")
})
    },[token])
    useEffect(()=>{
        onSubmit()
    
     },[onSubmit])
    return (
<CardWrapper
headerLabel="confirming your email"
backButtonLabel="Back to Login Page"
backButtonHref="/auth/login"
>
    <div className="w-full flex justify-center items-center">

        {! success && ! error && (
            <BeatLoader  color="black" size={20} loading={true} />
        )
        }

<FormSuccess message={success} />
<FormError message={error} />
    </div>


</CardWrapper>
    )
}