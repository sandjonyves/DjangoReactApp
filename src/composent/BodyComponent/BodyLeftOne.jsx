
import { Link } from "react-router-dom"
import "../style/StyleTextone.css"


function BodyLeftOne() {
         

      const text="obtenir un tuteur en un instant"

    return (
        <div className=" absolute mx-[200px] lg:mx-[300px] 
         max-[700px]:mx-[25px] max-[596px]:mx-0  space-y-6 bg-sky-300 text-xl text-center pt-6  font-mono  __text">
            <h3 className=" title_diva text-4xl md:max-w-5xl">
                {text}
            </h3>
            <p className="text_a text-muted font-serif">nous sommes plus serieur que nous n'avons l'air</p>
            
            <div><button className=" py-1 px-4 text-sky-600 bg-red-50 text-2xl font-semibold 
            rounded-full border border-sky-200 hover:text-white hover:bg-sky-600 
            hover:border-transparent focus:ring-1 focus:outline-none focus:ring-sky-600 
            focus:ring-offset-2" > <Link to="/Form">Obtenir</Link> </button>
            <p className="text-muted">booster les competences de vos enfants en nous faisans confiance</p>
            </div>
        </div>
    )
    
}

export default BodyLeftOne