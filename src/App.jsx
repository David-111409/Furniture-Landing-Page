import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import News from "./components/News";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Products />
        <Testimonials />
        <Blog />
        <News />
        <Footer />
      </main>
    </>
  );
}

export default App;
