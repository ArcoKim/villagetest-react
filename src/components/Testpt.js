import React, { Component } from 'react';
import {
  Link,
	withRouter
} from "react-router-dom";
import Qaa from "./Qaa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faPollH } from '@fortawesome/free-solid-svg-icons';

class Testpt extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rVal: JSON.parse(atob(this.props.match.params.list))
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
		for(var i = 6; i < 12; i++) {
			if(!this.state.rVal[i]) {
				e.preventDefault();
				alert(`모든 문항에 응답해주세요. (${i + 1}번)`);
				return;
			} 
		}
	}

	render() {
		var elements = [];
    for(var i = 7; i <= 12; i++){
			if(this.state.rVal[i-1]) {
				elements.push(<Qaa id={i} key={i} arr={this.state.rVal} arrChange={this.arrChange} checked={this.state.rVal[i-1]}></Qaa>);
			} else {
				elements.push(<Qaa id={i} key={i} arr={this.state.rVal} arrChange={this.arrChange} checked={false}></Qaa>);
			}
    }
		return (
			<div className="qAnd">
				<div className="questionDiv">
					<Link to={"/1/" + btoa(JSON.stringify(this.state.rVal))}>
						<button className="goBtn"><FontAwesomeIcon icon={ faCaretLeft } size="4x" /></button>
					</Link>
					<div className="questions" style={{margin:'0 40px 0 10px'}}>
						{elements}
					</div>
				</div>
				<div className="endBtn">
					<Link to={"/result/" + btoa(JSON.stringify(this.state.rVal))} onClick={this.nextFunc}>
						<button className="buttonWithI">
							<FontAwesomeIcon icon={ faPollH } size="4x" className="inBtn" />
							<p className="buttonTxt">결과 확인</p>
						</button>
					</Link>
				</div>
				<p className="pgNum">페이지 2</p>
			</div>
		);
	}
}

export default withRouter(Testpt);