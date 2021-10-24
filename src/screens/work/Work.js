import React from 'react'
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

function createTimeline(){
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
                {createTimeline()}
            </Timeline>
         </div>
    )
}

export default Work
