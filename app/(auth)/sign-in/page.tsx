"use client";

import AuthForm from "@/components/forms/AuthForm";
import React from "react";
import { SignInSchema } from "@/lib/validation";

const SignIn = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(values) => Promise.resolve({ success: true, values })}
    />
  );
};

export default SignIn;
