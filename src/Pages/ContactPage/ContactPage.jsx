import React from "react";
import Navbar from "../HomePage/Components/Navbar";
import PageHeader from "../ServicesPage/Components/PageHeader";
import Contact from "../HomePage/Components/Contact";
import Footer from "../HomePage/Components/Footer";

const sans = { fontFamily: "'Manrope', system-ui, sans-serif" };

export default function ContactPage({ onSubmit }) {
  return (
    <div id="top" style={sans} className="bg-[#F4F5F7] text-[#0B0D10]">
      <Navbar active="Contact Us" />
      <PageHeader title="Contact us" current="Contact Us" description="Call, write or send us a message. We would love to hear about your project." />
      <main>
        <Contact onSubmit={onSubmit} />
      </main>
      <Footer />
    </div>
  );
}