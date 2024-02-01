import  {Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string
)=>{
await resend.emails.send({
  from: "onboarding@resend.dev",
  to: email,
  subject: "Two Factor Authentication",
  html: `

  <p>Click the link below to verify your email</p>

  <a href="${token}">${token}</a>
  `,
})
}
export const sendVerificationEmail = async (
    email: string,
     token: string
     ) => {

    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`
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

    const resetLink = `http://localhost:3000/auth/new-password?token=${token}`
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
