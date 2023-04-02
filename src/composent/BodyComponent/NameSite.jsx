import { useState } from "react"
 import "../style/StyleName.css"


function NameSite(params) {

    const name="Sedad education"

    return(
        <div>
              <h1 className="absolute  top-20 bg-sky-400 text-2xl capitalize  md:text-5xl left-10 text-lg max-[350px]:text-sm max-[285px]:text-md"> {name}</h1>
              <h1 className="absolute right-5 top-20 bg-sky-400 text-2xl capitalize md:text-5xl  max-[500px]:text-lg max-[350px]:text-sm max-[285px]:opacity-0 ">{name}</h1>
        </div>
    )
    
}

export default NameSite