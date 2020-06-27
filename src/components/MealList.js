import React, { Component } from 'react'
import axios from 'axios'

class MealList extends Component {
	constructor(props) {
		super(props)

		this.state = {
	  predict: "",
	  suggest: [],
	  safety: [],
      errorMsg: ''
		}
	}

	componentDidMount() {
		axios
			.get('/result')
			.then(response => {
				console.log(response);
				console.log(response.data.suggestions);
				this.setState({predict: response.data.prediction, 
					suggest: response.data.suggestions , 
					safety:response.data.safe 
				})
                
			})
			.catch(error => {
        		this.setState({errorMsg: 'Error retrieving data'})
            })
	}

 
	render() {
		//const { predict, suggestions, safe, errorMsg } = this.state
		const listSuggestions = this.state.suggest.map((suggestion) =>
  <li> {suggestion}</li>
);

		return (

			<div >
			<header >
				<h2>Find prediction for every meal</h2>
			</header>
			<p >Predicted amounted of raw materials: {this.state.predict}</p>
			<ul>{listSuggestions}</ul>
		</div>


		)
	}
}

export default MealList
