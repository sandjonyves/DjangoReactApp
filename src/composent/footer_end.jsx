
import { FaTextWidth } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialLinkedir,
  TiSocialSkypeOutline,
  TiSocialTwitter,
  TiPhoneOutline,
  TiMail
} from "react-icons/ti";

function Footer_end(params) {

  let circleClasses = "hover:bg-red-500  hover:border-transparent focus:ring-1 focus:outline-none focus:ring-sky-500 focus:ring-offset-2 border border-red-200 space-x-4 bg-sky-300 w-[50px] rounded-full  mx-auto";
  let iconStyles = { color: "white", fontSize: "1.5em" };

    return(
    <div>

     

<div className=" absolute bg-red-300 w-full  h-[110px] md:top-[1540px] top-[2750px] inline-block
text-center text-2xl " capitalize >

<div><img 
src="logo.png" alt="" className=" w-[110px] mx-auto
" /> </div> 

</div>

        <div className=" md:mt-[1150px] mt-[2050px] h-[200px]  mt-[1700px]">
            <div class="table w-full  bg-red-300  absolute h-[200px] border">
  <div class="table-header-group  border-1">
    <div class="table-row h-[100px]">
      <div class="table-cell text-center text-2xl">serad education</div>
  
  </div>
  <div class="table-row-group flex space-x-5 ... ">
    
    <div class="table-row flex space-x-10 ...">
      <div class="table-cell "><button className=" "> < TiSocialFacebook style={iconStyles} className={circleClasses}/> </button></div>
      <div class="table-cell "><button className="flex space-x-5 "><  TiSocialTwitter style={iconStyles} className={circleClasses}/></button></div>
      <div class="table-cell "><button className="flex space-x-5 "><TiMail style={iconStyles} className={circleClasses}/></button></div>
      <div class="table-cell "><button className="flex space-x-5 "><TiPhoneOutline style={iconStyles} className={circleClasses}/></button></div>
    </div>
    
  </div>
</div>
        </div></div>


        </div>
    )
    
}
export default Footer_end