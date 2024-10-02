import { Metadata } from "next";
import { SigninForm } from "./signinForm";

export const metadata: Metadata = {
  title: "Sign in | CoSplit"
};

const SigninPage = () => {
  return (
    <div>
      <SigninForm />
    </div>
  );
};

export default SigninPage;
