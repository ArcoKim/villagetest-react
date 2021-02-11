import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

class Prepare extends Component {
	render() {
		return (
			<div>
				<Link to='/test'>
					<button className="start">
						<p className="testm">테스트를</p>
						<p className="buttonTxt">시작하기</p>
					</button>
				</Link>
				{/* on NEXON DEVELOPERS */}
				<div className="charImg">
					<div className="line1">
						<div className="miniline1">
							<img src={process.env.PUBLIC_URL + '/chrImg/dA.png'} alt="다오" className="preImg" />
							<img src={process.env.PUBLIC_URL + '/chrImg/bA.png'} alt="배찌" className="preImg" />
						</div>
						<div className="miniline2">
							<img src={process.env.PUBLIC_URL + '/chrImg/dS.png'} alt="디지니" className="preImg" />
							<img src={process.env.PUBLIC_URL + '/chrImg/mA.png'} alt="마리드" className="preImg" />
						</div>
					</div>
					<div className="line2">
						<div className="miniline3">
							<img src={process.env.PUBLIC_URL + '/chrImg/mO.png'} alt="모스" className="preImg" />
							<img src={process.env.PUBLIC_URL + '/chrImg/eT.png'} alt="에띠" className="preImg" />
						</div>
						<div className="miniline4">
							<img src={process.env.PUBLIC_URL + '/chrImg/kE.png'} alt="케피" className="preImg" />
							<img src={process.env.PUBLIC_URL + '/chrImg/uN.png'} alt="우니" className="preImg" />
						</div>
					</div>
				</div>
				{/* on NEXON DEVELOPERS */}
			</div>
		);
	}
}

export default Prepare;