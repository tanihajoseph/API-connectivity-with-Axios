import React, { Component } from 'react'
import axios from 'axios'

class MealForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			mealId: '',
			week: ''
        }
    }
    
	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('/input', this.state)
			.then(response => {
                console.log(response)
				window.location="/retrieve"

			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { mealId, week} = this.state;
		      
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="mealId"
							value={mealId}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="week"
							value={week}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default MealForm