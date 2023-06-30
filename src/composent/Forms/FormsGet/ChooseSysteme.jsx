import { BrowserRouter, Link, Routes } from "react-router-dom"

import {useForm} from "react-hook-form"

import { useState } from "react";

function ChooseSysteme() {
   
  

  
    //initiallisation des outils de gestion des formilaires de react js
     const {handleSubmit,register,formState: {errors}} = useForm()
      function onSubmit(data){
        console.log(data)
      }
  

  
  const [state,setstate] = useState("")
   
  
  
  const [count,setcount] = useState(0);

  const radioValue = (e) => {
   return setcount(e.target.value)
  }

const [link , setlink]  = useState("")

  function set (e){
  
  
      var checkOne =document.querySelector('#checkOne');
      
      var checkTwo =document.querySelector('#checkTwo');

      var inputOne =document.querySelector('#inputOne');
      
      var inputTwo =document.querySelector('#inputTwo');
     
     
      var a=  document.querySelector('#butNext');

       var b= document.querySelector('.link');
      
      var b="/helps"
      console.log(checkOne)
      console.log(b.href);
        {count == 1 ? (a.className="text-white opacity-100 bg-blue-500 w-48 h-16 rounded-lg text-lg focus:shadow-outline"(setstate(checkOne.htmlFor)) (console.log(state))): 
      (
      a.className="text-white opacity-100 bg-blue-500 w-48 h-16 rounded-lg text-lg focus:shadow-outline"
     
     
        ) }

      if (inputOne.checked==true) {
        setstate(checkOne.htmlFor);
        setlink("/chooses")
      
       a.className=
     " hover:bg-blue-700 text-white bg-blue-500 w-48 h-16 rounded-lg text-lg focus:shadow-outline "
      
    console.log(state);
  
      }else if( inputTwo.checked=true){
        setstate(checkTwo.htmlFor);
         a.className="hover:bg-blue-700 bg-blue-500 w-48 h-16 rounded-lg text-lg focus:shadow-outline "
         // a.setAttribute("class", "click-btn")
         setlink("/chooseF")
       console.log(state);
    }else{
    a.getAttribute("disabled");
    }
 
  
}


let Style = " opacity-50  "
let but = "mt-5 space-y-5 h-auto md:h-10  text-left border-2 border-slate-300   "


return <div className="w-screen h-screen bg-slate-300 flex 
justify-center items-center"> 

<form action="" onSubmit={handleSubmit(onSubmit)}>
    
<div className="card w-[375px] rounded-md shadow-md bg-white p-5 ">
        <h1 className="text-center text-lg ">
          Quel sous-système d'éducation votre  enfant fait t'il ?</h1>





    <div className={but}>
      <label  id="checkOne" 
         htmlFor="sous-systeme Anglophone" >
          sous-systeme Anglophone 
          <input 
          id ="inputOne"
          className="ml-5"
          type="checkbox"
          value='1'
          onClick={(e) => {
set(e)}} 
          onChange={radioValue}
          checked={count == (1 )? (true) : false}
           />
      </label>
    </div> 

    <div className={but}>
      <label  id="checkTwo"  htmlFor="sous-systeme Francophone
      " >sous-systeme Francophone 
          <input
            value="2"
       
          id ="inputTwo"
          className="ml-5" 
          type="checkbox" 
          onChange={radioValue }
           onClick={(e) => {set(e)}}
        
          
          checked={count == 2 ?(true) : false}
         
          />
      </label>
    </div> 
    <div>
      <div className=" space-x-20 mt-10  text-center   items-center justify-between">
{/* <button onClick={handleNext}  class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
prev
</button> */}
     <Link class="link" to={link}  >   
     <button type="submit"   id="butNext" 
    className="hover:bg-blue-700 bg-blue-500 w-48 h-16 rounded-lg text-lg focus:shadow-outline opacity-50"
    href="#">
              
                next
        </button> 
      </Link>
</div>
    </div>
    


    </div>
    </form>
</div>
}


export default ChooseSysteme