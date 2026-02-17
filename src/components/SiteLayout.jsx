import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import WhatsAppFloat from "./WhatsAppFloat.jsx"
import ScrollTopFloat from "./ScrollTopFloat.jsx"
export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Outlet />
      </main>
      <WhatsAppFloat />
      <ScrollTopFloat />
      <Footer />
    </div>
  );
}
