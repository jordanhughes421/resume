import React,{useState} from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import milliken from '../../images/milliken.png'
import heatcraft from '../../images/heatcraft.png'
import NAproj1 from '../../images/NAproj1.gif'
import { Fade } from "react-awesome-reveal";
import NAproj1PDF from '../../PDF/NAproj1PDF.pdf'
import NAproj2PDF from '../../PDF/NAproj2PDF.pdf'
import SCP from '../../PDF/SCP.pdf'
import NA2pic1 from '../../images/NA2pic1.PNG'
import NA2pic2 from '../../images/NA2pic2.PNG'

function MyCarousel(){
  const [value, setValue] = useState(0);

  const onChange = value => {
  setValue(value);
  }
  
  return(
    <div className='project__containter' id='projects'>
      <Fade direction='down'>
        <h1 className='header'> 
            Projects 
        </h1>
      </Fade>



      <Carousel plugins={['arrows','centered']} value={value} onChange={onChange}> 
      <div>
          <h3 style={{width: "100%"}}>
            Senior Capstone Project: Autonomous Drone Delivery
          </h3>  
          <p style={{width: "100%"}}>
            Worked with a computer engineering student and an electrical engineering student to create an autonomous drone delivery system using a DJI drone and an Arduino.
          </p>
          <div>
            <a href = {SCP} target = "_blank">View PDF</a>
          </div>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/J5HntapYAxc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/AXubxZdtbl0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/u3C_FURVODE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div>
          <h3 style={{width: "100%"}}>
            Numerical Analysis Project: Heat Transfer Model using Matlab
          </h3>  
          <h5 style={{width: "100%"}}>
            Abstract
          </h5>
          <p>
            "This project models the heat transfer experienced by a semi-infinite solid medium being heated by 
            a laser. The system also experiences convection at the surface at ambient temperature. First, the 
            problem will be set up mathematically with a differential equation with boundary conditions. Then, 
            the mathematical solution will be translated into a numerical solution for use in Matlab. A simple 
            explicit forward difference approximation was used to step forward in time, and a second-order 
            central difference approximation was used for spatial derivatives. The model is displayed using a 
            contour plot showing temperature changing with time." 
          </p>
          <div>
            <a href = {NAproj1PDF} target = "_blank">View PDF</a>
          </div>
          <img src={ NAproj1 } style={{width: "50%"}}/>
      </div>

      <div>
          <h3 style={{width: "100%"}}>
            Numerical Analysis Project: Model of Cross-Sectional Flow using Matlab
          </h3>  
          <h5 style={{width: "100%"}}>
            Abstract
          </h5>
          <p style={{width: "100%"}}>
            "This project models the cross-sectional flow field in a conduit defined by fluid passing between a
            rectangular outer shell and a circular internal pipe along the center axis. First, the problem will be
            given mathematically showing the governing equation with boundary conditions. Then, using the
            finite element method, the problem will be solved in Matlab through use of the Galerkin method
            for the numerical approximation. The model is displayed using a contour plot to show the fluid
            velocity at different coordinates within the conduit." 
          </p>
          <div>
          <a href = {NAproj2PDF} target = "_blank">View PDF</a>
        </div>
          <img src={ NA2pic1 } style={{width: "50%"}}/>
          <img src={ NA2pic2 } style={{width: "50%"}}/>
      </div>

      

    </Carousel>
    <Dots 
      value={value} 
      onChange={onChange} 
      number='3'
    />
  </div>
  )

}



export default MyCarousel;