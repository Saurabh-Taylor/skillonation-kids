"use client";
import { SignupFormDemo } from "@/components/Form";
import { useSearchParams } from "next/navigation";

import React, { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
};

const PageContent = () => {
  const searchParams = useSearchParams();
  const firstname = searchParams.get("firstname") ?? "";
  const lastname = searchParams.get("lastname") ?? "";
  const email = searchParams.get("email") ?? "";

  const params = { firstname, lastname, email };

  return (
    <div>
      <SignupFormDemo params={params} />
    </div>
  );
};

export default Page;
