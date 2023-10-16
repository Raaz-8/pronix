import Header from "./components/header";
import Main from "./components/main";
import Services from "./components/services";
import About from "./components/about";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import Contact from "./components/contact";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Services/>
        
        <About/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;


// <div className="bg-primary w-full overflow-hidden">
//         <div className={`container mx-auto`}>
//           <div className={`xl:max-w-[1280px] w-full`}>
//             <Testimonials />
//           </div>
//         </div>
//       </div>