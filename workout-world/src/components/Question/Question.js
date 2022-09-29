import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Question.css'


 const Question = () => {
    return (
        <div className="container ReactAccordion">
             <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header> <h3>How does React work ? </h3> </Accordion.Header>
        <Accordion.Body>
         <p>
         React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
         </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> <h3>what is the difference between props  and state ? </h3> </Accordion.Header>
        <Accordion.Body>
          <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header> <h3>what are doing useEffect besides dataload ?</h3></Accordion.Header>
        <Accordion.Body>
         <p> Fetching data
Reading from local storage
Registering and deregistering event listeners</p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


        </div>
    );
};

export default Question;