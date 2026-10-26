import { Company } from "@/components/sections/Company";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Sectors } from "@/components/sections/Sectors";
import { Services } from "@/components/sections/Services";
import { Value } from "@/components/sections/Value";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Company />
      <Services />
      <Sectors />
      <Process />
      <Value />
      <FinalCta />
    </>
  );
}
