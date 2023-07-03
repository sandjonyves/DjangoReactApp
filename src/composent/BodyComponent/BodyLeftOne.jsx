
import { Link } from "react-router-dom"
import "../style/StyleTextone.css"
import {useForm} from "react-hook-form"
import Bodybutton from "./BodyButton"
function BodyLeftOne() {
         
  const {handleSubmit,register,formState: {errors}} = useForm()
      const text="obtenir un encadreur en un instant"



     let font = "w-screen h-screen    flex  justify-center items-center"
     let StyleTitle = "capitalize text-center text-xl  "
     
       
    return (<>
      <div className="absolute  mt-[-250px]">

       
       {/* fdffgfd
       <div class="max-w-md mx-auto xl:mx-[600px] xl:ml-[600px] lg:mx-[400px] bg-white rounded-xl shadow-md overflow-hidden lg:max-h-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
     
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>
        <div className=" bg-sky-300  card  md:w-[400px] w-[300px] max-[332px]:w-[250px]  rounded-md shadow-md bg-white  my-20">

            <h3 className=" title_diva text-4xl md:max-w-5xl">
                {text}
            </h3>
            <p className="text_a text-muted font-serif">nous sommes plus serieur que nous n'avons l'air</p>
            
            <div><button className=" py-1 px-4 text-sky-600 bg-red-50 text-2xl font-semibold 
            rounded-full border border-sky-200 hover:text-white hover:bg-sky-600 
            hover:border-transparent focus:ring-1 focus:outline-none focus:ring-sky-600 
            focus:ring-offset-2" > 
            <Link to="/Form">Obtenir
            </Link>
             </button>
            <p className="text-muted">booster les competences de vos enfants en nous faisans confiance</p>
            </div>
        </div>
 */}


        <div className={font}> 

    <div className="mb-[500px] ">
  

  <Bodybutton/>
</div>
<form className="card w-[385px] rounded-md shadow-md bg-red-300 p-5 max-[720px]:m-15">
     
         <div className="text-center"> <h1 htmlFor="how can we joint you text-center"
          className={StyleTitle}>{text} </h1>
         </div>
        
      <div className="text-center">
      <p className="py-2  text_a text-muted font-serif">Nous sommes plus serieur que nous n'avons l'air</p>
            
            <div>
            <p className="text-muted">booster les competences de vos enfants en nous faisans confiance</p>
            <button className="  py-1 px-4 text-sky-600 bg-blue-300 text-2xl font-semibold 
            rounded-full border border-sky-200 hover:text-white hover:bg-blue-500
            hover:border-transparent focus:ring-1 focus:outline-none focus:ring-sky-600 
            focus:ring-offset-2" > 
            <Link to="/Form">Obtenir
            </Link>
             </button>
            </div>
   
   </div>

</form>
</div>

</div>
   
    
   </>
   )
    
}

export default BodyLeftOne