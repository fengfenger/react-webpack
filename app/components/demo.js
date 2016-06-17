import React, {Component} from 'react';
import Avtar from '../images/avtar.png';
export default class Demo extends React.Component{
    constructor() {
        super();
    }
    render() {
        //JSX here!
        return (
        <div>
          <div className="login-form">
            <div className="close"></div>
            <div className="head-info">
        			<label className="lbl-1"> </label>
        			<label className="lbl-2"> </label>
        			<label className="lbl-3"> </label>
        		</div>
            <div className="clear"> </div>
            <div className="avtar">
              <img src={Avtar}/>
          	</div>
            <form>
              <input type="text" className="text"/>
              <div className="key">
                <input type="password"/>
              </div>
            </form>
            <div className="signin">
          		<input type="submit"/>
          	</div>
          </div>
        </div>
        )
    }
};
