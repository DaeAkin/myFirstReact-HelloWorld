import React from 'react'; // Bable이 자바스크립트로 변환해주기위해
import ReactDOM from 'react-dom'; // RealDom으로 변환해주기 위해

//const let  = something var
const element = <h1> Hello World</h1>;
ReactDOM.render(element,document.getElementById('root'));
console.log(element);