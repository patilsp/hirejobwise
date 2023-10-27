
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Welcome from "@/components/welcome";

import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Welcome />

        {/* <Projects /> */}
      </div>
    </main>
  );
}
