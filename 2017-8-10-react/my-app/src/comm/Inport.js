import React,{Component} from 'react';
import Li from './Li'

class Inport extends Component{
	constructor(){
		super();
		this.state={
			val:'',
			arr:['sj11']
		}
	}
	keyup=(ev)=>{
		if(ev.keyCode==13){
			let {arr}=this.state;
			let arr2=Object.assign(arr);
			arr2.push(ev.target.value)
			this.setState({
				arr:arr2,
				val:''
			})
		}
	}
	change=(ev)=>{
		this.setState({
			val:ev.target.value
		})
	}
	render(){
		let {arr}=this.state;
		let arr2=[];
		let list=null;
		list=arr.map((e,i)=>{
			let data={
				key:i,
				txt:e,
				num:i
			}
			return <Li {...data} />
		})
		return(
			<div>
				<input 
					type="text" 
					value={this.state.val}
					onKeyUp={this.keyup}
					onChange={this.change}
				/>
				<ul>
					{list}
				</ul>
			</div>
		)
	}
}
export default Inport;