import { useState } from "react"
 import "../style/StyleName.css"


function NameSite(params) {

    const name="Sedad education"

    return(
        <div>
              <h1 className="absolute text-white top-20 bg-blue-700 text-5xl capitalize  left-10 grid  max-[816px]:left-[200px] max-[816px]:right-[200px] max-[772px]:left-0 max-[772px]:w-auto max-[580px]:text-lg  "> {name}</h1>
              <h1 className="absolute text-white right-5 top-20 bg-blue-700 text-2xl capitalize md:text-5xl max-[816px]:hidden  max-[500px]:text-lg max-[350px]:text-sm max-[285px]:opacity-0 ">{name}</h1>
        </div>
    )
    
}

export default NameSite