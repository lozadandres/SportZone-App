// Importar los módulos
import React from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';
import Footer from "../components/Footer";
import Card from "../components/Card";

const Home: React.FC = () => {
  const showAlert = () => {
    Swal.fire({
      title: 'Bienvenidos a SportZone App',
      text: 'Disfruta de los mejores productos deportivos',
      icon: 'success',
      confirmButtonText: 'Vamos!'
    });
  };

  const products = [
    {
      id: 1,
      title: 'Nike Air Jordan 1 Retro',
      color: ['Rojo', 'Negro'],
      size: ['42', '43', '44'],
      image: 'https://cdn.shopify.com/s/files/1/0259/7021/2909/products/555088-032-PHCFH001-2000_1360x.png?v=1606485154',
      price: 69.999,
      description: 'Zapatillas de baloncesto de alto rendimiento, diseñadas para jugadores que buscan estilo y comodidad en la cancha.'
    },
    {
      id: 2,
      title: 'Adidas UltraBoost',
      color: ['Negro', 'Blanco'],
      size: ['40', '41', '42'],
      image: 'https://cdn.sneakerbaron.nl/uploads/2023/02/28042534/adidas-Ultraboost-Light-Cloud-White-GY9352-700x700.png',
      price: 59.999,
      description: 'Zapatillas para running con tecnología Boost que ofrece máxima amortiguación y retorno de energía en cada paso.'
    },
    {
      id: 3,
      title: 'Puma RS-X',
      color: ['Rojo', 'Negro'],
      size: ['41', '42', '43'],
      image: 'https://www.thenextsole.com/storage/images/385508-01.png',
      price: 79.999,
      description: 'Zapatillas de estilo urbano con un diseño futurista y tecnología de amortiguación avanzada.'
    },
    {
      id: 4,
      title: 'Balón de Fútbol Nike Strike',
      color: ['Azul', 'Negro'],
      size: ['42', '43', '44'],
      image: 'https://tienda.rfaf.es/1518-large_default/balon-nike-strike-playa-4-rfaf-290gr.jpg',
      price: 39.999,
      description: 'Balón de fútbol de alta calidad, diseñado para ofrecer durabilidad y un control óptimo en el campo de juego.'
    },
    {
      id: 5,
      title: 'Conjunto de Ropa Deportiva Under Armour',
      color: ['Azul', 'Negro'],
      size: ['S', 'M', 'L'],
      image: 'https://yanetennis.com/1904-large_default/conjunto-under-armour-nino.jpg',
      price: 89.999,
      description: 'Conjunto que incluye camiseta y pantalón corto, fabricado con materiales ligeros y tecnología anti-sudor.'
    },
    {
      id: 6,
      title: 'Mochila Deportiva Adidas Tiro',
      color: ['Negro'],
      size: [],
      image: 'https://tienda.granadacf.es/2399-large_default/mochila-negra-adidas.jpg',
      price: 49.999,
      description: 'Mochila resistente con múltiples compartimentos, perfecta para llevar todo tu equipo deportivo.'
    },
    {
      id: 7,
      title: 'Guantes de Entrenamiento Reebok',
      color: ['Blanco'],
      size: [],
      image: 'https://maqfit.com/wp-content/uploads/2020/07/guantes-boxeo-pu-14-oz-blanconegro-reebok-removebg-preview.png',
      price: 29.999,
      description: 'Guantes acolchados diseñados para sesiones de entrenamiento con pesas, proporcionando agarre y comodidad.'
    },
    {
      id: 8,
      title: 'Pelota de Yoga y Pilates',
      color: ['Negro'],
      size: [],
      image: 'https://lh3.googleusercontent.com/LpB0kOVRkjSasJ-CDqISGLge98ziTzQGERQImS1VEAHN-gWPMBmMfb05-vHpOMo6X2UI8XbgwZMAr_UYmJ7rikvgLgbRwNBpVZNJLLzdfQRGzyI',
      price: 19.999,
      description: 'Pelota versátil para yoga y pilates, ideal para mejorar la estabilidad y fortalecer el core.'
    },
    {
      id: 9,
      title: 'Cuerda de Saltar Profesional',
      color: ['Negro'],
      size: [],
      image: 'https://th.bing.com/th/id/R.8b1bc00995abb0b3b5025f86c6182017?rik=FJeZQO53YC4Smg&pid=ImgRaw&r=0',
      price: 14.999,
      description: 'Cuerda ligera y resistente, diseñada para entrenamientos de cardio y alta intensidad.'
    },
    {
      id: 10,
      title: 'Casco de Ciclismo Specialized',
      color: ['Blanco', 'Red'],
      size: [],
      image: 'https://www.vferrerbikestore.com/img/cms/BLOG/casco-specialized-echelon-ii-mips.png',
      price: 89.999,
      description: 'Casco aerodinámico y seguro, ideal para ciclistas que buscan protección y confort en cada recorrido.'
    },
    {
      id: 11,
      title: 'Botella de Agua Deportiva Nike',
      color: ['Negro'],
      size: [],
      image: 'https://static.nike.com/a/images/t_default/e9220a76-b2b0-44b8-8713-a6dc983c0216/botella-de-acero-inoxidable-con-pico-hypercharge-de-710-1050-FtwDfL.png',
      price: 12.999,
      description: 'Botella ergonómica y ligera, ideal para mantenerte hidratado durante tus entrenamientos.'
    },
    {
      id: 12,
      title: 'Rodillera de Compresión Mueller',
      color: ['Negro'],
      size: [],
      image: 'https://allpremiumstores.com/cdn/shop/files/unnamed_1.png?v=1689120513&width=1445',
      price: 24.999,
      description: 'Rodillera diseñada para brindar soporte y aliviar el dolor durante actividades físicas intensas.'
    },
    {
      id: 13,
      title: 'Bicicleta de Montaña Trek Marlin 7',
      color: ['Negro'],
      size: [],
      image: 'https://www.sefiles.net/images/library/zoom/trek-marlin-7-gen-3-483484-12.png',
      price: 1.299,
      description: 'Bicicleta de montaña de alto rendimiento, equipada con suspensión avanzada y un diseño robusto.'
    },
    {
      id: 14,
      title: 'Pesas Ajustables Bowflex',
      color: ['Negro'],
      size: [],
      image: 'https://teknofitness.it/wp-content/uploads/2021/11/bowflex-selecttech-1090i.png',
      price: 499.999,
      description: 'Juego de pesas ajustables con diseño compacto, perfecto para entrenamientos en casa.'
    },
    {
      id: 15,
      title: 'Traje de Baño Speedo',
      color: ['Azul'],
      size: [],
      image: 'https://martimx.vteximg.com.br/arquivos/ids/378142-720-720/1127868939-1.png',
      price: 44.999,
      description: 'Traje de baño resistente al cloro, diseñado para nadadores que buscan comodidad y durabilidad.'
    }
  ];

  return (
    <div className="container" style={{minHeight: "100dvh"}}>
      <div className="navbar">
        <h2>SportZone</h2>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      
      <section className='hero'>
        <div>
          <h1>SportZone App</h1>
          <p>Encuentra los mejores productos deportivos en nuestra app.</p>
          <button onClick={showAlert}>Haz click aquí</button>
        </div>
        <div>
          <img src="https://www.sportline.com.co/media/blog/thumbnail_1440x500_ZTEK_NUEVA_COLECCIO_N_ENERGY__1.png" alt="" />
        </div>
      </section>

      <div className="center">
        <div className="ball"></div>
        <div className="shadow"></div>
      </div>

      <section>
        <h2>Ofertas</h2>
        <div className="offer">
          <p>Descuento del 15% en todos nuestros productos.</p>
        </div>
      </section>

      <section>
        <h2>Productos</h2>
        <div className='catalog'> 
          {products.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;