import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-[140px] lg:mt-[200px]">
        <Hero />
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  );
}
