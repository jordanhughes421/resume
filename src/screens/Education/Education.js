import React from 'react'
import './education.css'
import Mercer from '../../images/Mercer.png'
import LSUS from '../../images/LSUS.png'

function Education() {
    return (

        <div className="education__container" id="education">
            <h1 className='header'>
                Education
            </h1>
            <div className='education__text'>
                <div className='college__container'>
                    <img src={Mercer} alt="Mercer Seal" style={{width: 246.4, height: 220}} /> 
                    <div className='test'>
                        <dl>
                            <dt><b>Undergraduate: Mercer University</b></dt>
                            <dd>- Bachelor of Science in Engineering - Mechanical Engineering</dd>
                            <dd>- GPA: 3.55</dd>
                            <dd>- May 2015-May 2019</dd>
                        </dl>
                    </div>
                </div>

                <div className='college__container'>
                    <img src={LSUS} alt="LSUS Seal" style={{width: 200, height: 200}}/> 
                    <div className='test2'>
                        <dl>
                            <dt><b>Graduate: Louisiana State University Shreveport</b></dt>
                            <dd>-Master of Business Administration - Finance Specialization</dd>
                            <dd>-GPA: 4.0</dd>
                            <dd>- Aug 2020-Jun 2021</dd>
                        </dl>
                    </div>
                </div>
            </div>
            
 {/*            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                <img src={Mercer} alt="Mercer Seal" style={{width: 246.4, height: 220}} /> 
                <img src={LSUS} alt="LSUS Seal" style={{width: 200, height: 200}}/> 
            </div> */}
        </div>
    )
}

export default Education
