import React, { Component } from 'react';
import { qList } from './variables';

class Qaa extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		var arrCpy = this.props.arr.concat();
		arrCpy[this.props.id - 1] = e.target.value;
		this.props.arrChange(arrCpy);
	}

	render() {
		var id = this.props.id;
		var chkArr = [];
		if(this.props.checked) {
			for(var i = 0; i < 4; i++) {
				if(Number(this.props.checked) == i) {
					chkArr[i] = true;
				} else {
					chkArr[i] = false;
				}
			}
		} else {
			chkArr = [false, false, false, false];
		}
		return (
			<div className="questionAndAnswer">
				<p className="question">{id}. {qList[id - 1]}.</p>
				<ul>
					<li>
						<input type="radio" name={"radio"+ id} id={"r"+ id + "1"} value="0" onChange={this.handleChange} defaultChecked={chkArr[0]} />
						<label htmlFor={"r"+ id + "1"} className="answer">매우 그렇다</label>
					</li>
					<li>
						<input type="radio" name={"radio"+ id} id={"r"+ id + "2"} value="1" onChange={this.handleChange} defaultChecked={chkArr[1]} />
						<label htmlFor={"r"+ id + "2"} className="answer">그렇다</label>
					</li>
					<li>
						<input type="radio" name={"radio"+ id} id={"r"+ id + "3"} value="2" onChange={this.handleChange} defaultChecked={chkArr[2]} />
						<label htmlFor={"r"+ id + "3"} className="answer">그렇지 않다</label>
					</li>
					<li>
						<input type="radio" name={"radio"+ id} id={"r"+ id + "4"} value="3" onChange={this.handleChange} defaultChecked={chkArr[3]} />
						<label htmlFor={"r"+ id + "4"} className="answer">매우 그렇지 않다</label>
					</li>
				</ul>
			</div>
		);
	}
}

export default Qaa;