"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SplashScreen from "../components/SplashScreen";

const Home: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = (): void => setShowSplash(false);

  return (
    <>
      {/* Fallback para usuarios sin JavaScript */}
      <noscript>
        <div className="noscript-content">
          <header>
            <Header />
          </header>
          <main>
            <section>
              <article>
                <h1>Bienvenido</h1>
                <p>
                  Este es el contenido principal de la página, el cual se carga
                  de forma indexable y es visible para los motores de búsqueda.
                </p>
              </article>
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </noscript>

      <div className="page-container">
        {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
        <header>
          <Header />
        </header>
        <main>
          <section>
            <article>
              <h1>Bienvenido</h1>
              <p>
                Este es el contenido principal de la página, el cual se carga de
                forma indexable y es visible para los motores de búsqueda.
              </p>
            </article>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;
