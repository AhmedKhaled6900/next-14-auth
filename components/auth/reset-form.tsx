
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
import { ResetSchema } from "@/schemas"
import { CardWrapper } from './cadr-wrapper'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { Reset } from "@/actions/reset"
import { useState, useTransition } from "react"

export const ResetForm = ()=> {
  const [error ,setError] =useState< string|undefined>("")
  const [success ,setSuccess] =useState< string|undefined>("")
  const [ispending,starttransition] = useTransition()
  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver : zodResolver(ResetSchema),
    defaultValues : {
      email:"",
      
    }
  })
  const onSubmit = (values:z.infer<typeof ResetSchema>)=>{
    setError("")
    setSuccess("")
console.log(values)
    starttransition(()=>{
      Reset(values)
      .then((data)=>{
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
    Reset(values)
  }
  return (
<CardWrapper 
headerLabel='Forgot Your Password'
    backButtonLabel='Back to Login Page'
    backButtonHref='/auth/login'
    
    >
<Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
<div className="space-y-y4">
<FormField control={form.control}
name="email"
render={({field})=>(
  <FormItem>
    <FormLabel>Email</FormLabel>
    <FormControl>
<Input 
 {...field}
 disabled ={ispending}

 placeholder="Email@example.com"
 type="email"
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
Send Reset Email</Button>
</form>
</Form>
</CardWrapper>
  )
}

