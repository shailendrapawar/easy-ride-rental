import Fleet from "@/components/sections/Fleet";
import Landing from "@/components/sections/landing";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full h-screen">
      <Landing />
      <Fleet />
    </div>
  );
}
