import CustomerReviews from './sections/CustomerReviews';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import PopularPreviews from './sections/PopularPreviews';
import Services from './sections/Services';
import SpecialOffer from './sections/SpecialOffer';
import Subscribe from './sections/Subscribe';
import Nav from './components/Nav';
import SuperQuality from './sections/SuperQuality';
const App =()=>(
   <main className="relative">
         <Nav />
       <section className="xl:padding-1 wide:padding-r  padding-b">
           <Hero/>
       </section>
       <section className="padding">
       <PopularPreviews />
       </section>
       <section className="padding">
       <SuperQuality />
       </section>
       <section className="padding-x">
       <Services />
       </section>
       <section className="padding">
       <SpecialOffer />
       </section>
       <section className="bg-pale-blue padding">
       <CustomerReviews />
       </section>
       <section className="padding-x w-full sm:py-32 py-16">
       <Subscribe />
       </section>
       <section className="bg-black padding-x padding-t pb-8">
       <Footer />
       </section>
   </main>
);
export default App;