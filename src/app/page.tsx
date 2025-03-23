"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/header/Header";
import HeroeSection from "@/pages/heroe/HeroeSection";
import SplashScreen from "@/components/splash/SplashScreen";

const Page = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 5500); // Un poco antes de terminar el splash

    const hideSplashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideSplashTimer);
    };
  }, []);

  return (
    <>
      {/* SplashScreen activo */}
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      {/* Contenido principal (ya cargado en segundo plano) */}
      <div className={`page-content ${fadeOut ? "fade-in" : "hidden-content"}`}>
        <div className="container-fluid p-0 w-full h-20 fixed">
          <Header />
        </div>
        <div className="container-fluid p-0">
          <HeroeSection />
        </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda eos tempore placeat quibusdam rem. Illum magni officia cum voluptate. Ipsa amet distinctio repudiandae consequuntur reprehenderit, numquam quae commodi blanditiis vitae?
          Nostrum explicabo a vero consequatur cupiditate aliquid. Iure pariatur laboriosam similique illo eligendi dicta minima magnam illum asperiores, aliquam repudiandae a sequi explicabo amet praesentium molestias, accusamus quas distinctio. Perspiciatis.
          Dolorem dignissimos officiis ipsum blanditiis a, natus quas facilis esse omnis mollitia nostrum sint illum perferendis. Sit, pariatur adipisci itaque perspiciatis dolore amet numquam incidunt. Sint voluptas quo cupiditate illum.
          Dicta sed accusantium voluptas hic possimus molestias perferendis, voluptatum delectus quas nobis, dolor aut deleniti. Exercitationem cumque reiciendis amet consequatur esse provident molestiae nemo, quidem tempora nostrum corporis, numquam quam.
          Ratione laudantium dignissimos tempore sapiente aliquam consequuntur aspernatur sint quod tempora ullam, iusto quo delectus neque? Assumenda quo illo ad fuga cupiditate eum qui, distinctio architecto. Atque dolorum itaque explicabo?
          Ab voluptas tempora eveniet, nulla, itaque mollitia aperiam at dolorum distinctio sunt tempore ipsum quisquam sequi expedita veniam iste saepe voluptatibus minima eligendi. Voluptate adipisci nostrum assumenda vitae cupiditate labore.
          Mollitia nam provident laudantium itaque sit exercitationem et pariatur, dolores similique cupiditate eius est veritatis quos aut, inventore, possimus earum ex repellat reiciendis asperiores illum suscipit. Maiores voluptatibus sint quasi.
          Delectus, quas. Voluptatem saepe itaque quo mollitia. Aut harum aliquid corporis laudantium architecto placeat magnam ex. Totam dolore cupiditate minima? Dolorem, ut quasi. Error sed facere at quae rem blanditiis.
          Impedit dolor magni nihil in laudantium illum et laboriosam facilis adipisci porro cupiditate explicabo, ipsum ex libero blanditiis numquam doloremque deserunt sed mollitia nam at quae nesciunt tenetur omnis. Porro?
          Facilis aliquid corrupti minima quidem praesentium recusandae. At, consectetur architecto temporibus provident expedita iure est velit aperiam ex veniam odio exercitationem libero saepe pariatur ad eligendi sint fugit harum doloremque?
          Dolorum, nisi ad quae assumenda magnam impedit natus consequatur nihil tempore accusamus ullam voluptatem nulla eligendi corporis praesentium alias dicta magni architecto voluptate dolor. Eveniet, delectus quas. Veniam, facilis esse.
          Blanditiis maiores similique delectus excepturi non aliquam. Sapiente ex nulla voluptates corporis perspiciatis non odit mollitia voluptatibus. Sint quasi ipsa accusamus aliquid vitae, esse itaque consequuntur unde, dolorum quos earum!
          Aliquam veritatis labore numquam nisi, deserunt, ipsam sit minima natus quam inventore, aliquid perspiciatis ad sunt porro accusantium accusamus id suscipit deleniti officia veniam? Aliquam assumenda architecto libero. Eius, modi!
          Odio, quas vitae explicabo, exercitationem pariatur est consectetur soluta, dignissimos quia recusandae cupiditate sapiente! Quia, excepturi repudiandae nisi voluptatibus sunt quos consequuntur repellendus neque et? Provident eaque cumque enim ducimus.
          Dolores doloremque repellat possimus asperiores repellendus dolorum et, assumenda harum debitis illo architecto iste vitae illum. Esse et quibusdam iste vel, vitae pariatur sapiente culpa labore, voluptates odit, quam molestias?
          Similique voluptas velit dicta maiores repellat beatae iusto veritatis quisquam explicabo distinctio necessitatibus consequuntur quasi, temporibus dolorum, praesentium ut nihil quod, inventore commodi ex? Dolorem ipsum nisi enim vel. Eos!
          Labore voluptatibus dolor illum veniam eaque qui. Obcaecati aut numquam neque vero! A temporibus culpa maiores eaque reiciendis beatae, exercitationem praesentium voluptatibus. Incidunt, voluptatibus dicta assumenda dolore corrupti necessitatibus iusto.
          Laudantium ullam sint libero error eum! Necessitatibus aliquid mollitia molestiae atque exercitationem quia nisi minus, cum, voluptate sequi maxime iste. Nemo nisi neque enim labore? Reprehenderit eum placeat assumenda labore.
          Tempora, obcaecati aspernatur natus facilis reprehenderit rerum odit quia corrupti neque sit adipisci repudiandae nesciunt consectetur deserunt velit eos sapiente, culpa animi ut temporibus. Libero culpa ullam labore alias modi.
          Nihil quaerat ipsum adipisci ipsa alias? Omnis pariatur, neque minima consequuntur molestias ipsum vel ducimus, adipisci, sit eius tempora quos. Consequatur eaque earum sint necessitatibus quod consectetur tempora inventore magni.
        </p>
      </div>
    </>
  );
};

export default Page;
