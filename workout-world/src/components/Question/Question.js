import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Question from '../Question/Question'; 


 Question = () => {
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
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


        </div>
    );
};

export default Question;