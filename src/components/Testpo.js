import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import Qaa from "./Qaa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

class Testpo extends Component {
	render() {
		var elements = [];
    for(var i = 1; i <= 6; i++){
        elements.push(<Qaa id={i} key={i}></Qaa>);
    }
		return (
			<div className="qAnd">
				<div className="questionDiv">
					<div className="questions" style={{margin:'0 10px 0 40px'}}>
						{elements}
					</div>
					<Link to="/test/2">
						<button className="goBtn"><FontAwesomeIcon icon={ faCaretRight } size="4x" /></button>
					</Link>
				</div>
				<p className="pgNum">페이지 1</p>
			</div>
		);
	}
}

export default Testpo;