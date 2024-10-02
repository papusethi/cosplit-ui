import { Metadata } from "next";
import { SignupForm } from "./signupForm";

export const metadata: Metadata = {
  title: "Sign up | CoSplit"
};

const SignupPage = () => {
  return (
    <div>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
