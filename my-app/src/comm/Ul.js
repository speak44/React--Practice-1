 import React,{Component} from 'react'
 import Li from './Li'
 
 
class Ul extends Component{
	 constructor(){//初始状态
	 	super()
	 	this.state={
	 		arr:['1111','2222','333','444']
	 	}
	 }
	 click=()=>{
	 	let {arr}=this.state;
	 	let arr3=Object.assign(arr)
	 	arr3.push('888')
	 	this.setState({
	 		arr:arr3
	 	})
	 	
	 }
	 render(){
	 	let {arr}=this.state;
	 	let list=null;
	 	list=arr.map((e,i)=>{
	 		let data={
	 			txt:e,
	 			key:i,
	 			num:i
	 		}
	 		return <Li {...data}/>
	 	})
	 	return(
	 		<div>
	 			<input type="button" value="llll" onClick={this.click}/>
	 			<ul>{list}</ul>
	 		</div>
	 	)
	 } 
}

export default Ul;