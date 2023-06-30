import {  createBrowserRouter, Link, Routes} from "react-router-dom"
import ChooseSysteme from "./FormsGet/ChooseSysteme"
import React from "react"
import { useState } from "react"
import ChooseStandard from "./FormsGet/ChooseStandard";
import ChooseClassPrimary from "./FormsGet/Primary/primaryAnglophone/ChooseClassPrimary";
import BodyLeftOne from "../BodyComponent/BodyLeftOne";
import ChooseStandardF from "./FormsGet/Primary/primaryFrancophone/ChooseStandartF";





function AppForm(params) {
   
  const [varForm,setvarForm] = useState(

    ["formOne","formTwo","formthree"]
  );
  
  const formLength = varForm.length;
  
  const [page,setpage] = useState(0)

  const handlePrev = () => {

    setpage(page ===0 ? formLength-1 : page-1);
}

const handleNext = () => {
    setpage(page ===formLength-1? 0:page + 1 );
} 
const handleNextTwo = () => {
  setpage(page ===formLength-1? 0:page + 1 );
} 

const handlePass = () => {

  switch (page) {
    case 0: {return <ChooseSysteme handlepass={handlePass} handleNext={handleNext} handleNextTwo={handleNextTwo}/>}
      

   
    case 1:{return <ChooseStandard handleNext={handleNext} handlePrev={handlePrev}/>}

   

   case 2:{return <ChooseClassPrimary handleNext={handleNext} handlePrev={handlePrev}/>}


  
    default: return null
      
  }
}
   
    return(
   
   <div>

       <div>{handlePass()}</div>

       <div>
            {page==0?( <div><div class="hidden space-x-20 mt-10  text-center   items-center justify-between">
           <button onClick={handlePrev} class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        prev
         </button>
         <button onClick={handleNext} class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
       next
         </button>
         </div>
      </div>):page==1?
    ( <div><div class=" space-x-20 mt-10  text-center   items-center justify-between">
    <button onClick={handlePrev} class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
 prev
  </button>
  <button onClick={handleNext} class=" hidden inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
next
  </button>
  </div>
</div>):(<div><div class="space-x-20 mt-10  text-center   items-center justify-between">
<button onClick={handlePrev} class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
prev
</button>
<button onClick={handleNext} class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
next
</button>
</div>
</div>  
    
    )}


         {/* <div class="space-x-20 mt-10  text-center   items-center justify-between">
           <button onClick={handlePrev} class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        prev
         </button>
         <button onClick={handleNext} class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
       next
         </button>
         </div> */}
      </div>
  
  </div>

    )
}

export default AppForm