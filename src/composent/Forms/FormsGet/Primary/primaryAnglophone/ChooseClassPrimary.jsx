import { useState } from "react";
import BodyLeftOne from "../../../../BodyComponent/BodyLeftOne";

export default function ChooseClassPrimary(params) {


       
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

const handlePass = () => {

  switch (page) {
    case 0: {return <BodyLeftOne handlepass={handlePass} handleNext={handleNext} />}
      
 
  
    default: return null
      
  }
}

    return (

        <div>
            {handlePass()}
           <button onClick={handleNext} >boud</button>
        </div>
    )
    
}