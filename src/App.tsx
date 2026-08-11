import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SiteLayout } from './components/SiteLayout';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Gallery } from './pages/Gallery';
import { Coach } from './pages/Coach';
import { Contact } from './pages/Contact';
import { InnerCourt } from './pages/ecosystem/InnerCourt';
import { CoachLab } from './pages/ecosystem/CoachLab';
import { Academy } from './pages/ecosystem/Academy';

export function App() {
  return (
    <>
      <LoadingScreen />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/coach" element={<Coach />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/inner-court" element={<InnerCourt />} />
          <Route path="/coachlab" element={<CoachLab />} />
          <Route path="/academy" element={<Academy />} />
        </Routes>
      </BrowserRouter>
    </>);

}