
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
import { RegisterSchema } from "@/schemas"
import { CardWrapper } from './cadr-wrapper'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { register } from "@/actions/register"
import { useState, useTransition } from "react"

export const RegisterForm = ()=> {
  const [error ,setError] =useState< string|undefined>("")
  const [success ,setSuccess] =useState< string|undefined>("")

  const [ispending,starttransition] = useTransition()
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver : zodResolver(RegisterSchema),
    defaultValues : {
      email:"",
      password:"",
      name:""
      
    }
  })
  const onSubmit = (values:z.infer<typeof RegisterSchema>)=>{
    setError("")
    setSuccess("")

    starttransition(()=>{
      register(values)
      .then((data)=>{
        setError(data.error)
        setSuccess(data.success)
      })
    })
register(values)
  }
  return (
<CardWrapper 
headerLabel='Create account'
    backButtonLabel='Already have an account'
    backButtonHref='/auth/login'
    showSocial
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
<FormField control={form.control}
name="name"
render={({field})=>(
  <FormItem>
    <FormLabel>Name</FormLabel>
    <FormControl>
<Input 
 {...field}
 disabled ={ispending}

 placeholder="Your Name"
 type="name"
 />
    </FormControl>
    <FormMessage/>
  </FormItem>
)}/>
<FormField control={form.control}
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
    <FormMessage/>
  </FormItem>
)}/>
</div>
<FormError message={error}/>
<FormSuccess message ={success}/>



<Button disabled={ispending} type="submit" className="w-full">
Register</Button>
</form>
</Form>
</CardWrapper>
  )
}

