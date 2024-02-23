import CustomerReviews from "@/components/CustomerReviews";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PopularProducts from "@/components/PopularProducts";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";
import Subscribe from "@/components/Subscribe";
import SuperQuality from "@/components/SuperQuality";

const Home = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="wide:padding-r padding-b xl:p-1">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x w-full py-16 sm:py-32">
        <Subscribe />
      </section>
      <section className="padding-x padding-t bg-black pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default Home;
