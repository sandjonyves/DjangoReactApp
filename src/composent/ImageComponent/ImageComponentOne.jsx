import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 import "../style/Style_images_one.css"

function ImageCoponentOne() {

  const [images]=useState([
    "images (4).jpeg",
    "images (1).jpeg",
    "images (2).jpeg",
    "images (3).jpeg"])
  return (
  <div className="">    
<div className="   w-full h-[500px] ">
<div className="  " >
<Carousel autoPlay  interval={1500} infiniteLoop='true'   thumbWidth={50}  >

{images.map( (img) => {
  return( 
  <div className='md:shrink-0 bg-blue-400 '>
  <img src={img} className=" h-[900px]" alt="imgas "></img>
  </div>
  
  )

})}
  </Carousel>
</div>
</div>
</div>     
       
  );
}


export default ImageCoponentOne