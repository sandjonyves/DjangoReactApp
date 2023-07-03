import { useState } from "react";
import { Link } from "react-router-dom"
import {useForm} from "react-hook-form"
import axios from 'axios'
import emailjs from "@emailjs/browser"

function ChooseStandard(){

  //initiallisation des outils de gestion des formilaires de react js
   const {handleSubmit,register,formState: {errors}} = useForm()
   const onSubmit = (data) => {

      // axios.post(url+'data/list/',{
      //    'name': data.class,
      //    'niveau':data.email,
      //    'classe':data.class,
      // }).then(res => {
      //    alert("errosfdfgdf");
      //    console.log(data)
      //    gestAllTask()
      // }).then(err => {
      //    alert(err);
      // })
      // gestAllTask()
      // alert(data.class);
      // console.log(data)
      
      axios ({
         method:'post',
         url:"http://127.0.0.1:8000/data/add/",
         data:{
            'name':data.name,
            'niveau':data.email,
            'classe':data.class
         }
      }).then((res) =>{
         alert(data.name)
         
      }).catch((res) =>{
         alert(res);
        
      })
   
      
   // //data.email ="sandjonyves@gmail.com"
   // console.log(data);
   //    const template ="template_flpq63a"
   //    const service = "service_9dc6y2a"
   //    sendfeeback(service,template,{
   //       name:data.name,
   //       phone : data.number,
   //       niveau : data.class,
   //       //reply_to : r.target.reset()
   //    })
    
   //  }
   // const sendfeeback = (service,template,variable) => {
   //    //alert("sucess");
   //    var start = window.performance.now();
   // emailjs
   
   // .send((r) =>{
   //    alert("sucess------------------------------");  
   // },service,template,variable,"jhpPPttN08Qj9L-EJ")
   
   // .then((res) => {
   //    //alert("sucess");
   //    var end = window.performance.now();
   //    var execute=end-start
   //    alert(start+"   les temps   "+end+"temps d'execution :"+execute);
   // })
   // .catch((err) =>{
     
   //    alert("error");
   // })
   }

   //  
   const pattern = /^6[0-9]{8}$/

   const veryf = () => {
      var a = document.getElementById('butNext');
      a.addEventListener("click",{handleNext});
   }

   //declaration of constate who will be use to change form

   const [count,setcount] = useState(0);
   const radioValue = () => {
       

      var checkboxes2 = document.querySelectorAll('input[type="checkbox"]');
      var b =document.querySelector("#butNext");
      let verif=false;
      let index = 0
      while( index < checkboxes2.length) {
       
         
         const element = checkboxes2[index].checked;
         console.log(element);
         console.log(verif);
         index++;
         if (element) {
            verif=true;
         }
      }
    
    
      if (verif) {
         console.log(checkboxes2.length);
        
        b.removeAttribute("disable");
        // b.disabled=false;
     
        b.className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
         b.addEventListener('click', (event) => {
            let i = 0;
            // while( i < checkboxes2.length) {
                      
            //  let elemen= checkboxes2[0];
            
            //      elemen.checked=true;
                 
            //      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
            //              console.log(elemen);
            //              i++;
                         
                      
                      
                   //}
    
         handleNext();
      
        
        });
         
      }else{
        
         //b.disable=true;
         b.className="bg-white text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
         b.addEventListener('click', (event) => {
             
            
            b.className="bg-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
   
   
           });
      }
     
    }
   
   
   const formArray  =[1,2,3,4,5];
   const [formNo,setFormNo] = useState(formArray[0]);

   const formArray2  =[1,2,3,4,5];
   const [formNo2,setFormNo2] = useState(formArray2[0])

   let chekbox ="w-6 space-x-5  hover:bg-red-400"
   let Style = "m-0 opacity-50  text-lg h-auto w-auto  hover:bg-blue-200 focus:bg-red-400"
let Styles = "ml-5   text-lg h-auto w-auto "
let but = "flex flex-col mt-5 space-y-5  h-auto  w-auto   ml-20 border-2 border-slate-300 mr-20  "
let buts = "flex flex-col mt-5 space-y-5  h-auto  w-auto   ml-10 border-2 border-slate-300 mr-10  "
let font = "w-screen h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 flex  justify-center items-center"
let StylePev = " bg-blue-500 font-bold py-2 h-auto w-40 mb-5  px-4 rounded focus:outline-none text-white focus:shadow-outline hover:bg-blue-700"
let StyleTitle = "capitalize text-center text-xl bg-blue-500 text-white "
   //incrrmentation ou decrementation de fomno pour afficher chaque forùulaire
   const handleNext = () =>{
       
       setFormNo(formNo + 1)
   }
   const handlePrev = () =>{

       setFormNo(formNo -1 )
   }
   const handleNext2 = () =>{
       setFormNo2(formNo2 + 1)
   }
  
   const handlePrev2 = () =>{
       setFormNo2(formNo2 -1 )
   }
  
   const ctl = () => {
    var a=  document.querySelector("#formctl")
    a.className="hidden"
   }
   const ctl2 = () => {
      var a=  document.querySelector("#formctl")
      a.className=""
     }
  
     const change = () =>{

      var checkboxes2 = document.querySelectorAll('input[type="checkbox"]');
         var b =document.querySelector("#butNext");
       
         console.log(b);
      
         console.log("fdsfffffffffffffffffffffff");
         
         //   b.removeAttribute("disable");
           // b.disabled=false;
         //  b.className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
         //b.attributes='disable';
         b.addEventListener('click', (event) => {
            console.log(event);
         
         handleNext()
        });
       
   
        handlePrev();
        // console.log(f);
       
      // f.reset();
    } 
     //gestion de la permutation entre le primaire et secondaire
   function all() {
      handleNext()
      ctl()
   }
   function all2() {
      handlePrev()
      ctl2()
   }
   function all21() {
      handlePrev2()
      ctl2()
   }

 const tabClas = ["class1","class2","class3","class4","class5","class6"]
 const tabClas2 = ["From1","From2","From3","From4","From5","lawer","upper"]
 const tabMatirePrimaire = ["matamatic","science","hist/geo/ecm","anglais"]


  return <div onSubmit={handleSubmit(onSubmit)}>

<div className="h-20"><h1 className="py-5 text-center text-w-[300px] ">SERAD LA SAOLUTION POUR VOS ENFANTS</h1> </div>

{
formNo === 2 && <div>
<div className={font}>
<div className="card  md:w-[400px] w-[300px] max-[332px]:w-[250px]  rounded-md shadow-md bg-white  my-20">
     
      <h1 className={StyleTitle}>
         Choose class
      </h1>
       
       <div className={buts}>
      
         {tabClas.map((element) => {
            console.log(element)
            return <ul><div className={buts}><button value={element} className={Style} onClick={handleNext} {...register("class")}>{element}</button>
             </div></ul>
         })}
       
       </div>
  
    
      <div class=" space-x-20 mt-10  text-center  
          items-center justify-between">
         <button onClick={all2}   
               class="butNexts" 
               id="butNext" 
               className={StylePev} href="#">
               prev
         </button>
   </div> 
 </div>
</div>
</div>  

}


{


   formNo === 3 && <div>

  
   <form  className=" p-5 max-[500px]:h-[1000px] h-screen bg-slate-300 w-screen h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 flex  justify-center items-center">
   <div className="card w-[500px]    h-auto rounded-md shadow-md bg-white p-5 my-10">
      <h1 className={StyleTitle}> Choose Matter</h1>
   <div className={buts}>
      <label htmlFor="Mathematics   " className={Style}>
         Mathematics
         <input  type="checkbox" class="checksM" onClick={radioValue} {...register("matiere")} value="mathematics"  className={Styles}   /> 
      </label>
   </div>
   <div className={buts}>
      <label htmlFor="ICT" className={Style}>ICT
            <input type="checkbox" class="checksM" onClick={radioValue} {...register("matiere")} value="ICT" className={Styles}/>
      </label>
   </div>
   <div className={buts}>
         <label htmlFor=" Science and Tecnology" className={Style}> 
         Science and Tecnology
            <input type="checkbox" class="checksM" onClick={radioValue} {...register("matiere")} value="Science and Tecnology" className={Styles} />
         </label>
   </div>
   
   <div className={but}>
      
      {tabMatirePrimaire.map((element) => {
         console.log(element)
         return  <div className={but}> <ul>   <li> {element}<input type="checkbox" class="checksM" onClick={radioValue} {...register("matiere")} value={element}  className={Styles}/>
         </li> </ul></div>
      })}
    
    </div>
  
   <div>
      <div class=" space-x-20 mt-10  text-center   items-center justify-between">
         <button  onClick={handlePrev}  class=" bg-blue-500 hover:bg-blue-700 text-white
          font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="button">
            prev
         </button>
         <button disable id="butNext"   className=" bg-blue-500 hover:bg-blue-700 
         text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline opacity-0
          " >
            next
         </button>
   </div>
   </div>
</div>
</form>
</div>


}
{
   formNo === 4 && <div>
      <div className={font}> 

    
<form className="card w-[375px] rounded-md shadow-md bg-white p-5 ">
      <div className="flex flex-col mb-2 ">
         <div className="text-center"> <h1 htmlFor="how can we joint you text-center"
           className={StyleTitle}>Comment pouvons nous vous contacté </h1>
         </div>
         <label htmlFor="name " className="">nom</label>
         <input type="text" className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder="enter your name"  {...register("name",{required:true,
         minLength:2}
         )} />
        {errors.name && <p className="text-red-300">champ vide </p>}
      </div>
      
      <div className="flex flex-col mb-2 ">
         <label htmlFor="what is your number phone" className=""> numero de telephone</label>
         
        {/* prefice un champ */}
         <input type="text" placeholder="654340911"  className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md"  
           {...register("number", {
            required: true,
            maxLength:9 ,
            pattern:/^6[0-9]/ ,
            minLength:9
          
          })}
           
           />
            {errors.number && errors.number.type ==="maxLength" ?(
               //  {veryf},
              <p className="text-red-300"> overflow number</p>):
              errors.number && errors.number.type ==="minLength" ?(
               //  {veryf},
              <p className="text-red-300"> you haven't  recht the minimum of number </p>):
              true
              }
              {errors.number && errors.number.type ==="pattern" &&(
               //  {veryf},
              <p className="text-red-300"> le numeros doit commencer par 6</p>)}
            {errors.number && errors.number.type ==="required" &&<p className="text-red-300"> champ vide</p>}
      </div>
      <div className="flex flex-col mb-2 ">
      <h1 htmlFor="Où habite votre enfant " className=""> adresse email</h1>
         <input type="text" 
         className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder="serad@gmail.com" 
         {...register("email",{
            required:true,
            pattern : /^([a-z]||[0-9])/
         })}
         />
          {errors.email && errors.email.type ==="pattern" &&(
               //  {veryf},
              <p className="text-red-300"> verifier l'adresse email</p>)}
            {errors.email && errors.email.type ==="required" &&<p className="text-red-300"> champ vide</p>}
     
      </div>

      <div className="flex flex-col mb-2 ">
      <h1 htmlFor="Où habite votre enfant " className=""> Où habite votre enfant </h1>
         <input type="text" 
         className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder="Cradat yaounde " 
         {...register("street",{
            required:true})}
         />
         {errors.street && <p className="text-red-300">empty field </p> }
      </div>
      <div>
         
      <div class=" space-x-20 mt-10  text-center   items-center justify-between">
         <button onClick={change} id = "prc" class=" bg-blue-500 hover:bg-blue-700 text-white
          font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="button">
           prec
         </button>
         <button  class="butNexts" id="butNext"  className=" bg-blue-500 hover:bg-blue-700 
         text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
          " type = "submit"  >
           suivant
         </button>
   </div>
   </div>

</form>
</div>
</div>
}



{/* ////////////////formilaire du niveau secondaire/////// */}

{


formNo2 === 1  && <div id="formctl" className="">
   <div className={font}>
  <div className="card w-[400px] h-auto md:mx-20 mx-60  rounded-md shadow-md bg-white p0 my-20 ">
   <h1 className={StyleTitle}>choose the academic level </h1>
      <div className={but} onClick={all} >
         <button className={Style}  >primaire</button>
      </div>

      <div className={but}>
         <button onClick={handleNext2}  className={Style}>secondaire</button>
      </div>
      <div class=" space-x-20 mt-10  text-center   items-center justify-between">
{/* <button onClick={handleNext}  class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
prev
</button> */}
       <Link to="/form"><button   id="butNext" 
         className={StylePev}>
             <div className="">prev</div>
        </button> </Link>
</div>
</div>
</div>
 
</div>


}



{
formNo2 === 2 && <div>
   <div className={font}>
   <div className="card  md:w-[400px] w-[300px] max-[332px]:w-[250px]  rounded-md shadow-md bg-white  my-20">
        
         <h1 className={StyleTitle}>
            Choose class
         </h1>
         <div className={buts}>
      
         {tabClas2.map((element) => {
            console.log(element)
            return <ul><div className={buts}><button value={element} className={Style} onClick={handleNext} {...register("class")}>{element}</button>
            </div></ul>
         })}
       
       </div>
  

       
         <div class=" space-x-20 mt-10  text-center  
             items-center justify-between">
            <button onClick={all21}   
                  class="butNexts" 
                  id="butNext" 
                  className={StylePev}>
                  prev
            </button>
      </div> 
    </div>
   </div>
</div>  


}


{


   formNo2 === 3 && <div>

  
   <div className=" p-5 max-[500px]:h-[1000px] h-screen bg-slate-300 w-screen h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 flex  justify-center items-center ">
   <div className="card w-[500px]    h-auto rounded-md shadow-md bg-white p-5 my-10">
      <h1 className={StyleTitle}> choose matter</h1>

      <div className={but}>
      
      {tabMatirePrimaire.map((element) => {
         console.log(element)
         return  <div className={but}> <ul>   <li> {element}<input type="checkbox" class="checksM" onClick={radioValue} {...register("matiere")} value={element}  className={Styles}/>
         </li> </ul></div>
      })}
    
    </div>
  
  
</div>
</div>
</div>


}
{
   formNo2 === 4 && <div>
      <div className={font}> 

    
<form className="card w-[375px] rounded-md shadow-md bg-white p-5 ">
      <div className="flex flex-col mb-2 ">
         <div className="text-center"> <h1 htmlFor="how can we joint you text-center"
          className={StyleTitle}>Comment pouvons nous vous contacté </h1>
         </div>
         <label htmlFor="name " className="">nom</label>
         <input type="text" className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder="enter your name"  {...register("name",{required:true,
         minLength:2}
         )} />
        {errors.name && <p className="text-red-300">champ vide </p>}
      </div>
      
      <div className="flex flex-col mb-2 ">
         <label htmlFor="what is your number phone" className=""> numero de telephone</label>
         
        {/* prefice un champ */}
         <input type="text" placeholder="654340911"  className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md"  
           {...register("number", {
            required: true,
            maxLength:9 ,
            pattern:/^6[0-9]/ ,
            minLength:9
          
          })}
           
           />
            {errors.number && errors.number.type ==="maxLength" ?(
               //  {veryf},
              <p className="text-red-300"> overflow number</p>):
              errors.number && errors.number.type ==="minLength" ?(
               //  {veryf},
              <p className="text-red-300"> you haven't  recht the minimum of number </p>):
              true
              }
              {errors.number && errors.number.type ==="pattern" &&(
               //  {veryf},
              <p className="text-red-300"> le numeros doit commencer par 6</p>)}
            {errors.number && errors.number.type ==="required" &&<p className="text-red-300"> champ vide</p>}
      </div>
      <div className="flex flex-col mb-2 ">
      <h1 htmlFor="Où habite votre enfant " className=""> adresse email</h1>
         <input type="text" 
         className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder="serad@gmail.com" 
         {...register("email",{
            required:true,
            pattern : /^([a-z]||[0-9])/
         })}
         />
          {errors.email && errors.email.type ==="pattern" &&(
               //  {veryf},
              <p className="text-red-300"> verifier l'adresse email</p>)}
            {errors.email && errors.email.type ==="required" &&<p className="text-red-300"> champ vide</p>}
     
      </div>

      <div className="flex flex-col mb-2 ">
      <h1 htmlFor="Où habite votre enfant " className=""> Où habite votre enfant </h1>
         <input type="text" 
         className="p-2 border boder-slate-400 mt-1 outline-0
         rounded-md" placeholder="Cradat yaounde " 
         {...register("street",{
            required:true})}
         />
         {errors.street && <p className="text-red-300">empty field </p> }
      </div>
      <div>
         
      <div class=" space-x-20 mt-10  text-center   items-center justify-between">
         <button onClick={change} id = "prc" className=" bg-blue-500 hover:bg-blue-700 text-white
          font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          type="button">
           prec
         </button>
         <button  class="butNexts" id="butNext"  className=" bg-blue-500 hover:bg-blue-700 
         text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
          " type = "submit"  >
           suivant
         </button>
   </div>
   </div>

</form>
</div>
</div>
}

   </div>
}


export  default ChooseStandard