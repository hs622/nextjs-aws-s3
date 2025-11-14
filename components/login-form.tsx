import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GoogleButton from "./google-button";
import { Field, FieldGroup, FieldSeparator } from "./ui/field";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Contiune with your Google account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {/* <div className="flex flex-col gap-4">
              <form noValidate>
                <FieldGroup>
                  <Field>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </Field>
                  <Field>
                    <Button type="submit">Create Account</Button>
                  </Field>
                  <FieldSeparator>Or</FieldSeparator>
                </FieldGroup>
              </form>
            </div> */}
            <div className="flex flex-col gap-4">
              <GoogleButton />
            </div>
            {/* <div className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div> */}
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}

