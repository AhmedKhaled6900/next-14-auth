import  {Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string
)=>{ 
  // console.log(token)
await resend.emails.send({
  from: "onboarding@resend.dev",
  to: email,
  subject: "Two Factor Authentication",
  html: `
  <p>your 2FA Code ${token}</p>
  `
})
}
export const sendVerificationEmail = async (
    email: string,
     token: string
     ) => {

    const confirmLink = `https://next-14-auth-green.vercel.app/auth/new-verification?token=${token}`
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Verify your email",
    html: `

    <p>Click the link below to verify your email</p>

    <a href="${confirmLink}">${confirmLink}</a>
    `,
  })
}
 export const sendPasswordResetEmail = async (
    email: string,
     token: string
 ) => {

    const resetLink = `https://next-14-auth-green.vercel.app/auth/new-password?token=${token}`
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `

    <p>Click the link below to verify your email</p>

    <a href="${resetLink}">${resetLink}</a>
    `,

  })
 }
