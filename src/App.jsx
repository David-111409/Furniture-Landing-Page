import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Products />
        <Testimonials />
      </main>
    </>
  );
}

export default App;
