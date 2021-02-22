import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

class Result extends Component {
	render() {
		return (
			<div className="result">
				{/* on NEXON DEVELOPERS */}
				<div className="reImgDiv">
					<img src={process.env.PUBLIC_URL + '/assets/dA.png'} alt="다오" className="reImg" />
				</div>
				{/* on NEXON DEVELOPERS */}
				<h2 className="reName">다오</h2>
				<h2 className="reScore">점수 : 10/10</h2>
				<p className="dscrpt">다오는 격정과 정의감이 넘치는 열혈 라이더입니다. 긍정적인 마인드를 가지고 있고, 정의로운 성격으로 인해 레이싱 중 다른 라이더를 공격하거나, 비정상적인 방법으로 승리를 쟁취하는 것을 꺼려합니다.</p>
				<div className="rsltBtn">
					<Link to="/">
						<button className="buttonWithI nmg">
							<FontAwesomeIcon icon={ faHome } size="4x" className="inBtn" />
							<p className="buttonTxt">처음으로</p>
						</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Result;