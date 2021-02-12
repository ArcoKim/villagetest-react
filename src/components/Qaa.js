import React, { Component } from 'react';

class Qaa extends Component {
	render() {
		var qList = ["모든 일에 긍정적이다", "캐릭터나 물건 등을 꾸미고 정비하는 것을 좋아한다", "나의 경험들을 보면 잘하는 일들은 재능보다 노력이 필요하다", "자신의 일에 진지하게 임한다", "가끔 현실을 벗어나는 생각을 하거나 예술 활동들을 즐긴다", "주변 사람들에게 외모나 행동들이 귀엽다는 말을 듣는다", "친구한테 인간관계보다 지식을 가르쳐 주는 것에 더 능숙하다", "계획을 세워도 오래가지 못한다", "말다툼에서 상대를 이기는 것보다 상대를 이해시키는 것이 중요하다", "주변 사람들의 부탁을 잘 거절하지 못하고 들어준다", "주로 상대방이 먼저 대화를 시작하거나 다가간다", "과정보다는 결과가 중요하다"];
		var id = this.props.id;
		return (
			<div className="questionAndAnswer">
				<p className="question">{id}. {qList[id - 1]}.</p>
				<ul>
					<li>
						<input type="radio" name={"radio"+ id} id={"r"+ id + "1"} />
						<label htmlFor={"r"+ id + "1"} className="answer">매우 그렇다</label>
					</li>
					<li>
						<input type="radio" name={"radio"+ id} id={"r"+ id + "2"} />
						<label htmlFor={"r"+ id + "2"} className="answer">그렇다</label>
					</li>
					<li>
						<input type="radio" name={"radio"+ id} id={"r"+ id + "3"} />
						<label htmlFor={"r"+ id + "3"} className="answer">그렇지 않다</label>
					</li>
					<li>
						<input type="radio" name={"radio"+ id} id={"r"+ id + "4"} />
						<label htmlFor={"r"+ id + "4"} className="answer">매우 그렇지 않다</label>
					</li>
				</ul>
			</div>
		);
	}
}

export default Qaa;