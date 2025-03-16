'use client';
import {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SplashScreen from "../components/SplashScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <SplashScreen onFinish={() => setLoading(false)} />;

  return (
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
