import React , {Component} from 'react'


class Input extends Component{
    render(){
        const {name , type , label="" , placeholder , value="" , id=""} = this.props
        return(
            <div className={this.props.type}>
        <div className="label">
        <label>{label}</label>
                </div>
                  <div className="inp"> 
                <input name={name} type={type} placeholder={placeholder} value={value} id={id}/>
                </div>
            </div>
        );
    }
}
export default Input;