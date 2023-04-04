import { BrowserRouter, Link, Routes } from "react-router-dom"
import App from "../../../App"
import NavOther from "../../NavOther"
import ChooseStandard from "./ChooseStandard"
import {
   createBrowserRouter,
   RouterProvider,
   Route,
   
 } from "react-router-dom";

function ChooseSysteme(params) {



   let prev = "<"
    let Style = " opacity-50"
    let but = "mt-5 space-y-5 h-auto md:h-10 w-auto md:w-96 text-left ml-20 md:ml-96 border-2 border-slate-300 mr-20  "
    return <div>

        <NavOther></NavOther>
  <div className="text-center mt-20  ">
        <h1>Quel sous-système d'éducation votre  enfant fait t'il ?</h1>
     <div className={but}>
        <button className={Style}><Link to={<App/>}>sous-systeme Anglophone </Link></button>
     </div>

     <div className={but}>
        <button className={Style} >sous-systeme Francophone</button>
     </div>

     <div className={but}>
        <button className={Style}>sous-systeme Bilingue</button>
     </div>
     <div>
   
   
     </div>
 </div>
    </div>
}


export default ChooseSysteme