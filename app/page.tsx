import Booking from "@/components/sections/Booking";
import Fleet from "@/components/sections/Fleet";
import Landing from "@/components/sections/landing";
import Reviews from "@/components/sections/Reviews";

import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className=" w-full h-screen">
      <Landing />
      <Fleet />
      <Services />
      <Booking />
      <Reviews />
    </div>
  );
}
