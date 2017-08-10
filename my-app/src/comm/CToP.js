import React from 'react';

class CToP extends React.Component{
	constructor(){
		super()
		this.state={
			arr:[
			{text:'内容1',checked:false,id:1},
			{text:'内容2',checked:false,id:2},
			{text:'内容3',checked:false,id:3},
			{text:'内容4',checked:true,id:4}
			]
		}
	}
	changeChild=(id)=>{
		let {arr}=this.state;
		let arr2=Object.assign(arr)
		arr2.forEach((e,i)=>{
			if (e.id===id) {
				e.checked=!e.checked
			}
		})
		this.setState({
			arr:arr2
		})
		
	}
	render(){
		let {arr}=this.state;
		let list=arr.map((e,i)=>{
			let	data={
				key:i,
				txt:e.text,
				num:i,
				id:e.id,
				checked:e.checked,
				changeChild:this.changeChild
			}
			return <Li {...data} />
		})
		return(
			<ul>{list}</ul>
		)
	}
}
class Li extends React.Component{
	change=()=>{
		this.props.changeChild(this.props.id)
	}
	render(){
		return(
			<li>
			<input 
				type="checkbox"
				checked={this.props.checked}
				onChange={this.change}
			/>
			<span>{this.props.txt}</span>
			</li>
		)
	}
}
 export default CToP
