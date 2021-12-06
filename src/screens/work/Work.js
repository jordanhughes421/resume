import React,{useState} from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { items } from '../../helpers/navigationLinks'
import './work.css'
import milliken from '../../images/milliken.png'
import heatcraft from '../../images/heatcraft.png'
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";


function selectImage (company){
    if (company == 'milliken') {
        return <img src={ milliken } alt='Milliken Logo' className='logo'/>
    } else if (company == 'heatcraft') {
        return <img src={ heatcraft } alt='Heatcraft Logo' className='logo'/>
    }
}

function returnText (Text){
    if (Text == 'right') {
        return 'right'
    }
    if (Text == 'left') {
        return 'left ' 
    }
    
}

function ExpandTimeline(job){
    const [readMore,setReadMore]=useState(false);
    const linkName=readMore?'-':'+'
    var extraContent=''
    if (job == 'Engineering Co-op I') {
        extraContent=
        <div>
            <ul className="extra-content">
                <li className='list-item'>
                    Assigned the task of assisting a manufacturing engineer with improving Heatcraft's shipping process. Upon arrival, the average on-time-ship was ~65%. 
                    Adjustments were made to the process to make it more fluid and streamline. When the project was finished, a full week of 100% on-time shipping was achieved.
                </li>
                <li className='list-item'>
                    Extensive application of 3D modeling and CAD to design tools/parts and plant layouts.
                </li>
                <li className='list-item'>
                    Kaizen project experience.
                </li>
                <li className='list-item'>
                    Exposure to tool and die and lean manufacturing.
                </li>
            </ul>
        </div>
    }
    if (job == 'Process Improvement Engineer/IT Administrator') {
        extraContent=
        <div>
            <ul className="extra-content">
                <li className='list-item'>
                    Lead a team to successfully reduce process downtime by 30%, resulting in an increase in throughput by $46,000/year and setting new records for machine efficiency. 
                    Major component of project success was evaluating current PLC program and making improvements through removing unnecessary steps and optimizing process setpoint values. Created Ignition application to monitor improvements. 

                </li>
                <li className='list-item'>
                    Doubled size of yarn package on certain styles through better utilization of machine settings resulting in $6,000/year savings. 
                </li >
                <li className='list-item'>
                    Created training schedules and oversaw training processes for a production department.
                </li>
                <li className='list-item'>
                    Quality control leader for a production department. Tracked, analyzed, and utilized data to locate and resolve all quality issues.
                </li>
                <li className='list-item'>
                    Wrote python and VBA scripts to automate repetitive tasks. 
                </li>
                <li className='list-item'>
                    Installed updates and set up new computers, managed databases and troubleshot issues, and wrote SQL queries/improved inefficient SQL queries.
                </li> 
            </ul>
        </div>
    }
    if (job == 'Advanced Process Improvement Engineer/IT Administrator') {
        extraContent=
        <div>
            <ul className="extra-content">
                <li className='list-item'>
                    Worked with a team of technicians to create a new SCADA application to monitor and control all opening and carding machines using Ignition
                </li>
                <li className='list-item'>
                    Quality control and training leader for 2 production departments.
                </li>
                <li className='list-item'>
                    Managed quality control lab consisting of 2 lab technicians and 2 quality facilitators.
                </li>
                <li className='list-item'>
                    Created CAD drawings/layouts for and assisted with installation of $2.2 million capital expenditure project.
                </li>
                <li className='list-item'>
                    Learned conversational Spanish to more effectively communicate with operators and technicians.
                </li>
            </ul>
        </div>
    }
    if (job == 'Advanced Engineering Services Professional') {
        extraContent=
        <div>
            <ul className="extra-content">
                <li className='list-item'>
                    Assigned the task of assisting a manufacturing engineer with improving Heatcraft's shipping process. Upon arrival, the average on-time-ship was ~65%. 
                    Adjustments were made to the process to make it more fluid and streamline. When the project was finished, a full week of 100% on-time shipping was achieved.
                </li>
                <li className='list-item'>
                    Extensive application of 3D modeling and CAD to design tools/parts and plant layouts.
                </li>
                <li className='list-item'>
                    Kaizen project experience.
                </li>
                <li className='list-item'>
                    Exposure to tool and die and lean manufacturing.
                </li>
            </ul>
        </div>
    }
    return (
        <div>
          <button className='plusbutton' onClick={()=>{setReadMore(!readMore)}}>{linkName}</button>
          {readMore && extraContent}
        </div>
      );

}

function CreateTimeline(){
    return items.map((e, idx) => (

        
        <Slide direction={returnText(e.location)}>
            <TimelineItem position={e.location} stlye='timeline__component'>

                <TimelineSeparator>
                    <TimelineDot variant='outlined'>
                        {selectImage(e.img)}
                    </TimelineDot>

                    <TimelineConnector className={e.forlast} /> 

                </TimelineSeparator>

                <TimelineContent>
                    <Typography className='title'>
                        <h5>
                        {e.title}
                        </h5>
                    </Typography>

                    <Typography className='contentTitle'>
                        {e.contentTitle}
                    </Typography>    

                    <Typography className='contentText'>
                        {e.contentText}

                    </Typography>
                    <Typography>
                        {ExpandTimeline(e.title)}
                    </Typography>
                </TimelineContent>
            </TimelineItem>

        </Slide>
        


    ))
}


function Work() {

    return (
        <div className='work__containter' id='work-experience'>
            <Fade direction='down'>
            <h1 className='header'> 
                Work Experience 
            </h1>
            </Fade>
            <Timeline>
                {CreateTimeline()}
            </Timeline>
         </div>
    )
}

export default Work
