import { Helmet, HelmetProvider } from "react-helmet-async";
//Components
import Head from "./components/Head";
import About from "./components/About";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Hire from "./components/Hire";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <Head></Head>
      <About></About>
      <Resume></Resume>
      <Services></Services>
      <Skills></Skills>
      <Hire></Hire>
      <ContactUs></ContactUs>
    </div>
  );
}

export default App;
