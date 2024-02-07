
"use client"
import * as z from "zod"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,


} from "../ui/form"
import { LoginSchema } from "@/schemas"
import { CardWrapper } from './cadr-wrapper'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { Login } from "@/actions/login"
import { useState, useTransition } from "react"
import Link from "next/link"

export const LoginForm = () => {
  const searchparams = useSearchParams()
  const urlError = searchparams.get("error") === "OAuthAccountNotLinked"
    ? "Email already in use" : ""
  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [ispending, starttransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })
  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("")
    setSuccess("")
    starttransition(() => {
      Login(values)
        .then((data) => {
          setError(data?.error)
          setSuccess(data?.success)
          if (data?.error) {
            form.reset()
            setError(data.error)
          }
          if (data?.success) {
            form.reset()
            setSuccess(data.success)
          }
          if (data?.twoFactor) {
            setShowTwoFactor(true)
          }
        })
.catch(() => {

  setError("Something wentwrong")
  // throw new Error("Something went wrong")

})
    })
    // Login(values)
  }

  return (
    <CardWrapper
      headerLabel='welcome back'
      backButtonLabel='Dont have an account'
      backButtonHref='/auth/register'
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {showTwoFactor && (
                <FormField control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Two Factor Code</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={ispending}

                          placeholder="123456"
type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
              )
            }
            {!showTwoFactor && (
                <>
                  <FormField control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={ispending}
                            placeholder="Email@example.com"
                            type="email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  <FormField control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            disabled={ispending}
                            placeholder="********"
                            type="password"
                          />
                        </FormControl>
                        <Button variant="link" size={"sm"} asChild className="px-0 font-normal" >
                          <Link href="/auth/reset-password">
                            forgot password
                          </Link>
                        </Button>
                        <FormMessage />
                      </FormItem>
                    )} />
                </>
              )
            }
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button disabled={ispending} type="submit" className="w-full">
            {
              showTwoFactor ? "Confirm" : "Login"
            }
          </Button>
        </form>
      </Form>
    </CardWrapper>

  )
}

