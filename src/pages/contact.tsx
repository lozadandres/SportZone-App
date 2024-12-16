import React from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  const handleContact = () => {
    Swal.fire({
      title: 'Mensaje enviado!',
      text: 'Nos pondremos en contacto contigo pronto.',
      icon: 'info',
      confirmButtonText: 'Aceptar',
    });
  };

  return (
    <div className="container" style={{minHeight: "100dvh"}}>
      <div className="navbar">
        <h2>SportZone</h2>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <section>
        <h1>Contactanos</h1>
        <p>Si tienes alguna pregunta o necesitas ayuda, no dudes en contactar con nosotros.</p>
        <form className="form">
          <input type="text" placeholder="Nombre" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <textarea placeholder="Escribe tu mensaje" className="textarea" />
          <button onClick={handleContact}>Enviar</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;