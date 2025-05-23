import Image from "next/image";
import Herosection from "./Component/Herosection";
import HeroAbout from "./Component/HeroAbout";
import Ourchef from "./Component/Ourchef";
import Menu from "./Component/Menu";
import OurServices from "./Component/OurServices";
import OurTeam from "./Component/Ourteam";
import Testimonials from "./Component/Testimonials";

export default function Home() {
  return (
    <>
      <Herosection />
      <HeroAbout />
      <Ourchef />
      <Menu />
      <OurServices />
      <OurTeam />
      <Testimonials />
    </>
  );
}
