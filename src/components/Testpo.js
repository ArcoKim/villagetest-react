import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import Qaa from "./Qaa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

class Testpo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rVal: []
		};
		this.arrChange = this.arrChange.bind(this);
		this.nextFunc = this.nextFunc.bind(this);
	}

	arrChange(arr) {
		this.setState({
			rVal: arr
		});
	}

	nextFunc(e) {
		for(var i = 0; i < 6; i++) {
			if(!this.state.rVal[i]) {
				e.preventDefault();
				alert(`모든 문항에 응답해주세요. (${i + 1}번)`);
				break;
			} 
		}
		sessionStorage.setItem('test1', JSON.stringify(this.state.rVal));
	}

	render() {
		var elements = [];
    for(var i = 1; i <= 6; i++){
			elements.push(<Qaa id={i} key={i} arr={this.state.rVal} arrChange={this.arrChange}></Qaa>);
    }
		return (
			<div className="qAnd">
				<div className="questionDiv">
					<div className="questions" style={{margin:'0 10px 0 40px'}}>
						{elements}
					</div>
					<Link to="/test/2" onClick={this.nextFunc}>
						<button className="goBtn"><FontAwesomeIcon icon={ faCaretRight } size="4x" /></button>
					</Link>
				</div>
				<p className="pgNum">페이지 1</p>
			</div>
		);
	}
}

export default Testpo;