import Email from "@/components/Email";
import SocialIcons from "@/components/SocialIcons";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import React, { useState } from "react";
import Contacts from "@/sections/Contacts";
import OtherProjects from "@/sections/OtherProjects";
import Footer from "@/sections/Footer";
import Head from "next/head";
import Loader from "@/components/Loader";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };
  return (
    <div className="app">
      <Head>
        <title>Ayush Bhardwaj</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      {showContent && (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Projects />
            <OtherProjects />
            <Contacts />
            <Footer />
          </main>
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}
