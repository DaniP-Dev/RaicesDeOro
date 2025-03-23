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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia consectetur distinctio voluptate, facere quisquam earum! Doloribus libero nisi eveniet corrupti quidem alias excepturi laborum, soluta nulla molestias eos, veritatis laudantium?
          Sequi omnis at fugit ad cum iste, enim explicabo saepe voluptate ipsam dicta, rerum, a nam error qui neque mollitia consectetur eligendi ex! Sunt aliquid assumenda quasi praesentium, vel aperiam.
          Laboriosam quam corporis labore incidunt debitis voluptatem placeat nostrum architecto, mollitia saepe. Labore facere officiis animi sit neque? Nisi ab fuga temporibus culpa inventore reprehenderit iure id aperiam officiis rem.
          Repudiandae iusto, qui autem est deleniti corporis suscipit, dolorem eaque delectus beatae labore sapiente ipsa quidem voluptates, voluptas nulla. Repellendus ullam accusantium facere nam dolore eos vitae. Ipsum, natus quod!
          Fugit accusantium modi magnam quibusdam iste, expedita eaque doloremque aliquam a nihil sapiente hic cumque sit voluptas corrupti blanditiis soluta consequuntur minus impedit dolorem sed aliquid neque nobis? Voluptatem, voluptate!
          Inventore temporibus eius sapiente vitae voluptas? Libero, eum, molestias doloremque dolore voluptatem delectus quisquam consectetur nobis consequatur beatae, excepturi modi corrupti dolorem perspiciatis nulla veniam facilis quam error maiores quibusdam.
          Error eaque sed, deleniti quibusdam vitae doloremque soluta delectus quaerat? Et provident, aliquid, repellat voluptas eligendi enim neque minus quod consequuntur omnis odit consectetur nostrum labore obcaecati magnam beatae ab.
          Amet iusto sint consequatur aliquam dolorem iste ratione, voluptate ducimus? Soluta, nostrum sunt, corrupti quis culpa cumque quae accusantium laborum sequi similique id inventore necessitatibus consectetur asperiores velit. Dignissimos, ad.
          Deserunt, possimus. Exercitationem, recusandae sint, reiciendis tempora illo id porro ab praesentium veniam esse dolore quam cumque voluptatem, ullam molestias optio atque ipsam nostrum error inventore dolores aut! Officiis, corporis.
          Commodi incidunt iste quaerat magni animi odit optio soluta quis quam quas id, atque placeat aspernatur eaque corrupti voluptates quibusdam, ratione esse, sapiente accusantium magnam ducimus ab! Minus, porro. Iusto.
          Pariatur labore nulla aliquid, quia ex adipisci similique. Ut nostrum aliquid impedit nisi, incidunt architecto aperiam itaque possimus voluptatum omnis quam doloremque, repudiandae, sit at facilis autem laboriosam! Asperiores, voluptatum.
          Architecto exercitationem in, soluta odit ea neque amet dolorem laudantium, deleniti sequi hic, aliquam minima. Laudantium deserunt, sint, similique consectetur corporis eveniet quasi distinctio nemo voluptatibus sunt assumenda, aliquid eaque!
          Aut ab dolore consequuntur fugiat quia, dignissimos dolorum accusantium omnis soluta itaque velit perferendis vero, nobis at nisi dolorem! Placeat quo consectetur veritatis magni, earum repellendus ratione repudiandae voluptatibus officiis.
          Illum quidem nostrum beatae libero possimus fugiat ea iure ipsum, ducimus tempore debitis ratione laborum natus numquam voluptatem omnis praesentium odio minima maxime sunt officia. Non quia ea fugit iusto.
          Asperiores mollitia, architecto assumenda praesentium nihil aliquid accusantium rerum perferendis eos recusandae eveniet voluptatem itaque officia quaerat, qui, deleniti molestias maxime? Voluptates aperiam, rem provident ipsa deleniti aliquam corporis ut?
          Voluptate, amet odio! Voluptas autem saepe, itaque similique, in non minima animi dicta veniam commodi sunt facere soluta deserunt amet quisquam fuga ipsum dolorem. Quis dicta natus alias quae esse.
          Beatae doloribus eos, consequuntur a nobis nemo reiciendis nostrum dolores quisquam exercitationem aut id, ullam aperiam consequatur quos itaque dignissimos facilis, voluptate officia. Voluptas ea delectus possimus accusamus doloribus odit?
          Voluptas quaerat a natus architecto possimus aliquam cumque unde molestiae, facere fugit impedit nostrum, quisquam magnam commodi expedita est repellat. Doloremque ad quo consectetur officia! Repellat nisi reprehenderit saepe impedit.
          Quidem ex suscipit nemo. Voluptatem sunt alias cupiditate recusandae voluptatibus eius facilis eligendi rem quibusdam aspernatur, maiores neque labore sapiente odit aut repudiandae aperiam sed doloremque consectetur mollitia sequi saepe!
          Molestiae fugit dolor sunt unde placeat, beatae commodi neque aliquam iure sed qui blanditiis et eaque autem temporibus nobis iusto dolorum explicabo molestias vero inventore totam, incidunt dolore illo. Itaque.
        </p>
      </div>
    </>
  );
};

export default Page;
