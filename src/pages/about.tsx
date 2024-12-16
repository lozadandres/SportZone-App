// Importar los módulos
import React from 'react';
import Link from 'next/link';
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <div className="container" style={{minHeight: "100dvh"}}>
      <div className="navbar">
        <h2>SportZone</h2>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <section>
        <h1>Esta website esta especializada en la compra y venta de productos deportivos de cualquier categoría</h1>
        <p>Somos la SportZone líder a nivel nacional</p>
      </section>
      <section className='nsotros'>
        <div>
          <h2>Misión</h2>
          <p>Nuestra misión es ofrecer un catálogo de productos deportivos de alta calidad y confianza, para que todos los usuarios puedan disfrutar de un entretenimiento decente y efectivo.</p>
        </div>
        <div>
          <h2>Visión</h2>
          <p>Nuestra visión es ser la plataforma líder en la compra y venta de productos deportivos de alta calidad y confianza, asegurando que todos los usuarios disfruten de un entretenimiento decente y efectivo.</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;