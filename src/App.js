import React, { Component } from 'react';
import './App.css'
import { css, cx } from "@emotion/css";
import Input from "./Input"
import Form from "./Form"

const R = css `


h1 , .first{
    text-align: center;
    margin-bottom: 0.5rem;
    color:rgb(241, 244, 247);
}
h1{
    font-weight: 400;
    line-height: 1.2;
}
h5{
    font-weight: 400;
 
 font-size:16px;
    padding:0px;
    margin:0px;
}

Input{
    
    width:632px;
    height:38px;
    border-radius: 0.35rem;
    border: 1px solid #ced4da;
    margin-bottom:20px;

}

Form{
    
    background-color: rgb(27 27 50 / 80%);
    color:#EEE;
    width:640px;
    height:1420;
    margin:auto;
   padding:40px;
 border-radius: 0.25rem;
 font-weight: 400;
 line-height: 2.5em;
 font-size:16px;

}
button{
    background-color:#37af65;
    color: #EEEE;
    width: 632px;
    padding: 0.75rem;
   
}
textarea{
    width:632px;
    height:110px;
}


  `


class App extends Component {

    render() {

        return ( 
            <div className = {cx(R)} id="container">
                
            <h1>freeCodeCamp Survey Form</h1>
           <p className="first">Thank you for taking the time to help us improve the platform</p>
                    
          <Form name="form" onSubmit="onSubmit" buttonN="submit">
          <Input name="rania" type="text" label="Name" placeholder="Enter Your Name"/>
          <Input name="Email" type="text" label="Email" placeholder="Enter Your Email"/>
          <Input name="Age(optional)" type="number" label="Age(optional)" placeholder="Age"/>
          <Input name="option" type="text" label="Which option best describes your current role?" placeholder="Select current role"/><br/>
          <h5>Would you recommend freeCodeCamp to a friend?</h5>
          <Input name="Definitely" type="radio" label="Definitely" /> 
          <Input name="Maybe" type="radio" label="Maybe" /> 
          <Input name="Not sure" type="radio" label="Not sure" /> 
          <Input name="favorite feature" type="text" label="What is your favorite feature of freeCodeCamp?" placeholder="select an option"/><br/>
          <Input name="see improved" type="checkbox" label="What would you like to see improved? (Check all that apply)" value="DefFront-end Projectsinitely"/>Front-end Projects<br/>
          <h5>Any comments or suggestions?</h5>
          <textarea name="comments" type="text" placeholder="Enter Your comment her...." /><br/>
          </Form>
         
           </div>
        );
    }
}



export default App;