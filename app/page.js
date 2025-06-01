"use client"

import HomePage from "@/component/landingPage/home";
import { useEffect, useState } from "react";
import Loading from "@/component/sub-component/loading";
import AppShell from "@/component/layout/appshel";
import AboutPage from "@/component/landingPage/about";
import StatsPage from "@/component/landingPage/stats";
import Product from "@/component/landingPage/product";
import Documentasion from "@/component/landingPage/documentasion";
 
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
        <AboutPage />
        <StatsPage />
        <Product />
        <Documentasion />
      </AppShell>
    </>
  );
}
