import React,{Component} from 'react';

class Li extends Component{
	render(){
		return(
			<li>
			<span>{this.props.num}</span>
			<p>{this.props.txt}</p>
			</li>
		)
	}
}
export default Li