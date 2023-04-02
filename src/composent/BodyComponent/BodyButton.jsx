import { Link } from "react-router-dom"

function Bodybutton(params) {

      let but=" ease-in duration-300 ... px-4 py-1    text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
       let StyleTd="space-x-5 space-y-5 max-[440px]:space-x-1 max-[440px]:space-y-1     w-[110px] h-[80px] text-center "
    return(
    <div>

        {/* <div className=" md:mt-[300px] mt-[200px] h-[300px]">
            <div class="table w-full  bg-sky-300  absolute h-full border">
 
                <div class="table-row h-[100px]">
                    <div className="table-coll">

                    </div>
      
                </div>
    
            </div>
        </div> */}
        <table className="px-auto table-auto absolute  px-5 top-[200px]  lg:mx-[400px] mx-[300px] max-[858px]:mx-[200px] max-[628px]:mx-[100px] max-[600px]:mx-[70px] max-[338px]:mx-[10px] w-[500px] max-[440px]:w-[300px]  h-[300px]" >

            <tbody>
                <tr>
                    <td >
                       <div className={StyleTd}><button className={but}>comment obtenir un tuteur</button></div> 
                    </td>
                    
                    <td >
                       <div className={StyleTd}> <button  className={but}> 
                            devinir un tuteur
                        </button></div>
                    </td>
                </tr>
                <tr>
                   <td >
                   <div className={StyleTd}> <button  className={but}>
                              <Link to="/cont">bon à savoir</Link>
                        </button></div>
                    </td>
                   
                    <td >
                    <div className={StyleTd}>
                        <button  className={but}>
                        obtenir de l'aide Gratuit
                        </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
       
    
)}

export default Bodybutton