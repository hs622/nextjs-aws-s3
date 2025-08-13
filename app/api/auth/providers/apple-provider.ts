import Apple from "next-auth/providers/apple";

const AppleProvider = Apple({
  name: "apple-auth",
  clientId: process.env.APPLE_CLIENT_ID,
  clientSecret: process.env.APPLE_CLIENT_SECRET,
});

export default AppleProvider;

