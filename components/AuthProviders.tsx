// import React from 'react'
"use client";

import { useState, useEffect } from "react";
import { getProviders, signIn } from "next-auth/react";
import Button from "./Button";


type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null);
  // We are going to fetch the providers using useEffect and 
  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      console.log(res);
      setProviders(res);
    }
    fetchProviders();
  }, [])

  if (providers) {
    return (
      <div>
        {/* We are getting a list of providers and then we are mapping them with a button */}
        {Object.values(providers).map((provider: Provider, i) => (
          <Button key={i} title="Sign In"handleClick={() => signIn(provider?.id)} />
        ))}
      </div>
    )
  }
}

export default AuthProviders