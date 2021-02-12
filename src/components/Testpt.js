import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import Qaa from "./Qaa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faPollH } from '@fortawesome/free-solid-svg-icons';

class Testpt extends Component {
	render() {
		var elements = [];
    for(var i = 7; i <= 12; i++){
        elements.push(<Qaa id={i} key={i}></Qaa>);
    }
		return (
			<div className="qAnd">
				<div className="questionDiv">
					<Link to="/test/1">
						<button className="goBtn"><FontAwesomeIcon icon={ faCaretLeft } size="4x" /></button>
					</Link>
					<div className="questions" style={{margin:'0 40px 0 10px'}}>
						{elements}
					</div>
				</div>
				<div className="endBtn">
					<Link to="/result">
						<button className="buttonWithI">
							<FontAwesomeIcon icon={ faPollH } size="3x" style={{color:'skyblue'}} />
							<p className="buttonTxt">결과 확인</p>
						</button>
					</Link>
				</div>
				<p className="pgNum">페이지 2</p>
			</div>
		);
	}
}

export default Testpt;