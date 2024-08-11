import React, { useEffect, useState } from 'react';
import axios from "axios";
import Accordion from 'react-bootstrap/Accordion';


const InterviewAccord = () => {

  const [datei, setDatei] = useState([]);

  const BASE_URL = "https://66b7c70c7f7b1c6d8f1cbb62.mockapi.io/interview";

  const getData = async ()=>{
    const {data} = await axios (BASE_URL);
    setDatei(data)
  }

  useEffect (()=>{
    getData()
  },[])

  return (
    <div className='accord'>
    <Accordion defaultActiveKey="0">
      {datei.map((bilgi, index) => (
        <Accordion.Item key={bilgi.id} eventKey={index.toString()}>
          <Accordion.Header>{bilgi.questions}</Accordion.Header>
          <Accordion.Body>
            {bilgi.answers}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  </div>
  )
}

export default InterviewAccord;