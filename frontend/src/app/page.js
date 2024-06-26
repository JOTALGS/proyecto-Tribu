'use client'
import Image from "next/image";
import Link from "next/link";
import AboutUs from "../landing_components/AboutUs";
import Footer from "../landing_components/Footer";
import Join from "../landing_components/Join";
import Header from "../landing_components/Header";
import Partners from "../landing_components/Partners";
import Properties from "../landing_components/Properties";
import Subscribe from "../landing_components/Subscribe";
import { LandingStyles } from "./styles/LandingStyles";
import Quote from "./sections/Quote.js";
import HeroSection from "./sections/HeroSection";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import ProcessSection from "./sections/ProcessSection";
import VideoSection from "./sections/VideoSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between" style={{backgroundColor: '#020011'}}>
        <LandingStyles />
        <Quote />
        <HeroSection />
        <DesignSection />
        <DisplaySection />
        <ProcessSection />
        <Join />
        <Footer /> 

        
        
        {/*<Header />
        <Partners />
        <Properties />
        <AboutUs />
        <Join />
        <Subscribe />
        <Footer /> 
        */}
    </main>
  );
}
