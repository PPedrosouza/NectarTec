// Components
// import DesktopNav from './components/landingpage/navbar/desktop-nav';
// import  '../../components/landingpage/navbar/navbar.scss'

// import MobileNav from './components/landingpage/navbar/mobile-nav';
// import Backdrop from "./components/landingpage/navbar/backdrop";
// import Hero from './components/landingpage/hero/hero';
// import Portfolio from "./components/landingpage/portfolio/portfolio";
// import Partners from "./components/landingpage/partners/partners";
// import About from "./components/landingpage/about/about";
// import Blog from "./components/landingpage/blog/blog";
// import Contact from "./components/landingpage/contact/contact";
// import Footer from "./components/landingpage/footer/footer";
import Content from '../../components/LandingComponents/Content';
import Footer from '../../components/LandingComponents/Footer';
import Header from '../../components/LandingComponents/Header';
 
export default function Home() {
  return (
    <>
      <Header />  
      <Content />
      <Footer />
    </>
  );
}

