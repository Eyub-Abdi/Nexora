import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Product } from "@/components/sections/product";
import { Services } from "@/components/sections/services";
import { Solutions } from "@/components/sections/solutions";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Services />
        <Solutions />
        <Product />
        <About />
        <Work />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
