"use client"

import HomePage from "@/component/landingPage/home";
import { useEffect, useState } from "react";
import Loading from "@/component/sub-component/loading";
import AppShell from "@/component/layout/appshel";
 
export default function Home() {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return(
    <>
      <AppShell>
        <HomePage />
      </AppShell>
    </>
  );
}
