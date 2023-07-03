
import React from "react";
//import { FaBars, FaTimes } from "react-icons/fa";
import "./composent/style/Style_navBar.css";
import ImageCoponentOne from "./composent/ImageComponent/ImageComponentOne";
import BodyTextTwo from "./composent/BodyComponent/BodyTextTwo";
import BodyLeftOne  from "./composent/BodyComponent/BodyLeftOne"
import NameSite from "./composent/BodyComponent/NameSite"
import "./App.css"
//import Footer_end from "./composent/footer_end";
//import {Routes,Route} from "react-router-dom";
//import {BrowserRouter, Link } from "react-router-dom";
import Bodybutton from "./composent/BodyComponent/BodyButton";
//import BodyOther from "./composent/OtherCoponent/BodyOther";
import Navbar from "./composent/Navbar";
import Footer from "./composent/OtherCoponent/Footer";
//import ChooseStandard from "./composent/Forms/FormsGet/ChooseStandard";

function App() {

    //const navref = useRef()

  //   const shownav = () => {
    
  //      navref.current.classList.toggle('responsive_bar')
  //  }
  
return(

  <React.Fragment>
  {/* <Routes>
    <Route path="react-app/:cont" element={<BodyOther/>}/>

   
  </Routes> */}
    
<div>

  <Navbar/>
</div>
<div>
<ImageCoponentOne/>
</div>


<div>

  < BodyLeftOne/>
</div>

<div>
  

  <BodyTextTwo/>
</div>

<div>
  <NameSite/>
</div>


<div className=" ">

  <Footer/>
</div>

</React.Fragment>

)

}

export default App;



