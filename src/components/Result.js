import React, { Component } from 'react';
import {
  Link, Redirect
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { description } from './variables'; 

class Result extends Component {
	storageClear() {
		sessionStorage.removeItem('test1');
		sessionStorage.removeItem('test2');
	}

	scoreGo(character) {
		var score = JSON.parse(sessionStorage.getItem('test1')).concat(JSON.parse(sessionStorage.getItem('test2')));
    var test = ["1 4", "6 8", "5 -7", "2 -4", "3 -1", "2 7", "6 -8", "4 -5", "1 -3", "7 -8", "2 5", "3 -6"];
    var importantQ = [4, 3, 8, 7, 10, 11, 5, 9];
    var result = {"dA":0, "dS":0, "mA":0, "bA":0, "kE":0, "mO":0, "uN":0, "eT":0};
		var splitArr = [];
		var si = 0;
		var splitArrZ = 0;
    var splitArrO = 0;
    var nSplitArrO = 0;
		for(var i = 0; i < 12; i++) {
			si = score[i];
			splitArr = test[i].split(' ');
			splitArrZ = Number(splitArr[0]) - 1;
			splitArrO = Number(splitArr[1]) - 1;
			if(splitArrO < 0) {
				nSplitArrO = Math.abs(splitArrO + 2);
			} else {
				nSplitArrO = splitArrO;
			}
			if(si == 0) {
				result[character[splitArrZ]] += 3;
				if(splitArrO > 0) {
					result[character[nSplitArrO]] += 3;
				}
			}
			else if(si == 1) {
				result[character[splitArrZ]] += 2;
				if(splitArrO > 0) {
					result[character[nSplitArrO]] += 2;
				} else {
					result[character[nSplitArrO]] += 1;
				}
			}
			else if(si == 2) {
				result[character[splitArrZ]] += 1;
				if(splitArrO > 0) {
					result[character[nSplitArrO]] += 1;
				} else {
					result[character[nSplitArrO]] += 2;
				}
			}
			else {
				if(splitArrO < 0) {
					result[character[nSplitArrO]] += 3;
				}
			}
			for(var iq = 0; iq < 8; iq++) {
				if(importantQ[iq] == i) {
					if(iq == splitArrZ) {
						if(si == 0) {
							result[character[splitArrZ]] += 2;
						}
						else if(si == 1) {
							result[character[splitArrZ]] += 1;
						}
						else if(si == 3) {
							result[character[splitArrZ]] -= 1;
						}
					}
					else if(iq == nSplitArrO) {
						if(splitArrO > 0) {
							if(si == 0) {
								result[character[nSplitArrO]] += 2;
							}
							else if(si == 1) {
								result[character[nSplitArrO]] += 1;
							}
							else if(si == 3) {
								result[character[nSplitArrO]] -= 1;
							}
						}
						else if(splitArrO < 0) {
							if(si == 3) {
								result[character[nSplitArrO]] += 2;
							}
							else if(si == 2) {
								result[character[nSplitArrO]] += 1;
							}
							else if(si == 0) {
								result[character[nSplitArrO]] -= 1;
							}
						} 
					}
				}
			}
		}
		var reVar = 0;
    var reIdx = 0;
    var charI = "";
    for(var i = 0; i < 8; i++) {
			if(reVar < result[character[i]]) {
				charI = character[i];
				reVar = result[charI];
				reIdx = i;
			}
    }
		return [charI, reVar, reIdx];
	}

	render() {
		if(!sessionStorage.getItem('test1') || !sessionStorage.getItem('test2')) {
			alert('잘못된 접근입니다.');
			return <Redirect to='/'></Redirect>
		}
		var character = ["dA", "dS", "mA", "bA", "kE", "mO", "uN", "eT"];
		var name = ["다오", "디지니", "마리드", "배찌", "케피", "모스", "우니", "에띠"];
		var color = ['blue', 'yellow', 'deeppink', 'red', 'purple', 'orange', 'dodgerblue', 'green'];
		var rsltHtml = this.scoreGo(character);
		return (
			<div className="result">
				{/* on NEXON DEVELOPERS */}
				<div className="reImgDiv">
					<img src={process.env.PUBLIC_URL + '/assets/' + rsltHtml[0] +'.png'} alt={name[rsltHtml[2]]} className="reImg" />
				</div>
				{/* on NEXON DEVELOPERS */}
				<h2 className="reName" style={{color:color[rsltHtml[2]]}}>{name[rsltHtml[2]]}</h2>
				<h2 className="reScore">점수 : {rsltHtml[1]}/11</h2>
				<p className="dscrpt" style={{color:color[rsltHtml[2]]}}>{description[rsltHtml[2]]}</p>
				<div className="rsltBtn">
					<Link to="/" onClick={this.storageClear}>
						<button className="buttonWithI nmg">
							<FontAwesomeIcon icon={ faHome } size="4x" className="inBtn" />
							<p className="buttonTxt">처음으로</p>
						</button>
					</Link>
					<div className="addthis_inline_share_toolbox"></div>
				</div>
			</div>
		);
	}
}

export default Result;