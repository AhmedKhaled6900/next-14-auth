import { NewPasswordForm } from "@/components/auth/new-password-form"
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Store - New Password',
  description: 'Generated by create next app',
}
const NewPasswordPage = () => {
    return (
   <NewPasswordForm></NewPasswordForm>
    )
}
export default NewPasswordPage