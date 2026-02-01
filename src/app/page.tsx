import React from "react";
import Hero from "@/components/Home/Hero";
import ChooseByNeed from "@/components/Home/ChooseByNeed";
import BestSellers from "@/components/Home/BestSellers";
import FeaturedBundles from "@/components/Home/FeaturedBundles";
import HomeCta from "@/components/Home/HomeCta";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Kiến Văn | Chọn sách đúng theo nhu cầu",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ChooseByNeed />
      <BestSellers />
      <FeaturedBundles />
      <HomeCta />
    </main>
  );
}