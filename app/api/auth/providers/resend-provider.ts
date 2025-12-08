import Resend from "next-auth/providers/resend"


const ResendProvider = () => {
  Resend({
    apiKey: process.env.RESEND_CLIENT_SECRET,
    from: "",
  })
}

export default ResendProvider;