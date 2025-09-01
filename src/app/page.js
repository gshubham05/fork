"use client";
import { useState } from "react";
import Herosection from "./Component/Herosection";
import HeroAbout from "./Component/HeroAbout";
import Ourchef from "./Component/Ourchef";
import Menu from "./Component/Menu";
import OurServices from "./Component/OurServices";
import Testimonials from "./Component/Testimonials";
import OrderModal from "./Component/Ordermodel";
import FloatingAssistantButton from "./Component/FloatingAssistantButton";
import Achievements from "./Component/Achievements";
import HeroMenu from "./Component/HeroMenu";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Herosection />
      <HeroAbout />
      <Ourchef />
      <Achievements />
      {/* <Menu /> */}
      <HeroMenu />
      <OurServices />
      <Testimonials />

      <FloatingAssistantButton onClick={() => setShowModal(true)} />
      <OrderModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
