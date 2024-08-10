import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import data from "../helper/data.js";

const InterviewAccord = () => {
  return (
    <div className='accord'>
     
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{data.header}</Accordion.Header>
        <Accordion.Body>
         {data.body}
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
  
    </div>
  )
}

export default InterviewAccord;