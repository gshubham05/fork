
'use client';
import { useState } from 'react';
import Herosection from './Component/Herosection';
import HeroAbout from './Component/HeroAbout';
import Menu from './Component/Menu';
import OurServices from './Component/OurServices';
import OurTeam from './Component/Ourteam';
import Testimonials from './Component/Testimonials';
import OrderModal from './Component/Ordermodel';
import FloatingAssistantButton from './Component/FloatingAssistantButton';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Herosection />
      <HeroAbout />
      <Menu />
      <OurServices />
      <OurTeam />
      <Testimonials />

      <FloatingAssistantButton onClick={() => setShowModal(true)} />
      <OrderModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
