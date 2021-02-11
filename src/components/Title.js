import React, { Component } from 'react';

class Title extends Component {
	render() {
		return (
			<div className="title">
        <div className="flexTitle">
            <h1 className="h1T yellowT">카트라이더</h1><h1 className="h1T greenT">붐힐</h1><h1 className="h1T yellowT" id="endT">테스트</h1>
        </div>
        <h2 className="h2T greenT">내 특징과 닮은 붐힐 라이더는?</h2>
    	</div>
		);
	}
}

export default Title;