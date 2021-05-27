import React , {Component} from 'react';
import {css , cx} from '@emotion/css';

const R = css`
  .radio,
  .checkbox {
    .label {
       display: inline-block;
    }
  }
`

class Form extends Component{
    render(){
       const {name , onSubmit ,children , buttonN} = this.props
        return(
            
           <form className={cx(R)} name={name} onSubmit={onSubmit}>
              {children}
              <button type="submit"> {buttonN} </button>
           </form>

            
        );
    }
}
export default Form;