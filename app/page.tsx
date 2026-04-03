import Booking from "@/components/sections/Booking";
import Fleet from "@/components/sections/Fleet";
import Landing from "@/components/sections/landing";

import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className=" w-full h-screen">
      <Landing />
      <Fleet />
      <Services />
      <Booking />
    </div>
  );
}
