
"use client"
import * as z from "zod"
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { NewpasswordSchema } from "@/schemas"
import { CardWrapper } from './cadr-wrapper'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { NewPassword } from "@/actions/new-password"
import { useState, useTransition } from "react"
import { useSearchParams } from "next/navigation"
export const NewPasswordForm = ()=> {
  const searchParams =useSearchParams()
  const token = searchParams.get("token")
// console.log(token)

  const [error ,setError] =useState< string|undefined>("")
  const [success ,setSuccess] =useState< string|undefined>("")
  const [ispending,starttransition] = useTransition()
  const form = useForm<z.infer<typeof NewpasswordSchema>>({
    resolver : zodResolver(NewpasswordSchema),
    defaultValues : {
      password:"",
      
      
    }
  })
  const onSubmit = (values:z.infer<typeof NewpasswordSchema>)=>{
    setError("")
    setSuccess("")

    starttransition(()=>{
      NewPassword(values,token)
      .then((data)=>{
        setError(data?.error)
        setSuccess(data?.success)
      })
    })

  }
  return (
<CardWrapper 
headerLabel='Enter New Password'
    backButtonLabel='Back to Login Page'
    backButtonHref='/auth/login'
    
    >
<Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
<div className="space-y-y4">
<FormField control={form.control}
name="password"
render={({field})=>(
  <FormItem>
    {/* <FormLabel>password</FormLabel> */}
    <FormControl>
<Input 
 {...field}
 disabled ={ispending}

 placeholder="********"
 type="password"
 />
    </FormControl>
    <FormMessage/>
  </FormItem>
)}/>

{/* <FormField control={form.control}
name="password"
render={({field})=>(
  <FormItem>
    <FormLabel>Password</FormLabel>
    <FormControl>
<Input 
 {...field}
 disabled ={ispending}
 placeholder="********"
 type="password"
 />
    </FormControl>

    <Button variant="link" size={"sm"} asChild className="px-0 font-normal" >
      <Link href="/auth/reset-password">
        forgot password
      </Link>
    </Button>
    <FormMessage/>
  </FormItem>
)}/> */}

</div>
<FormError message={error}/>
<FormSuccess message ={success}/>



<Button disabled={ispending} type="submit" className="w-full">
 Reset Password</Button>
</form>
</Form>
</CardWrapper>
  )
}

