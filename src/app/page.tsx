"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SplashScreen from "../components/SplashScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🟢 Mostrando SplashScreen...");
    const timer = setTimeout(() => {
      setLoading(false);
      console.log("✅ SplashScreen finalizado, mostrando contenido.");
    }, 7000); // ⏳ Duración del splash en ms

    return () => {
      clearTimeout(timer);
      console.log("🧹 Timer limpiado.");
    };
  }, []);

  return loading ? (
    <SplashScreen />
  ) : (
    <>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <section>
            <article>Hola</article>
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
