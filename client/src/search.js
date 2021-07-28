import React from "react"
import Recommendation from "./Recommendation"
import Results from "./Results"

class Search extends React.Component{
    constructor(){
        super()
        this.state = {
            firstIngredient: "",
            secondIngredient: "",
            thirdIngredient: "",
            fourthIngredient: "",
            fifthIngredient: "",
            sixthIngredient: "",
            seventhIngredient: "",
            eighthIngredient: "",
            recipes: [],
            inputCount: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
       
    }

    handleSubmit(event){
        event.preventDefault()
        const inputedIngredients = []
        if(this.state.firstIngredient !== ""){ inputedIngredients.push(this.state.firstIngredient) }
        if(this.state.secondIngredient !== ""){ inputedIngredients.push(this.state.secondIngredient) }
        if(this.state.thirdIngredient !== ""){ inputedIngredients.push(this.state.thirdIngredient) }
        if(this.state.fourthIngredient !== ""){ inputedIngredients.push(this.state.fourthIngredient) }
        if(this.state.fifthIngredient !== ""){ inputedIngredients.push(this.state.fifthIngredient) }
        if(this.state.sixthIngredient !== ""){ inputedIngredients.push(this.state.sixthIngredient) }
        if(this.state.seventhIngredient !== ""){ inputedIngredients.push(this.state.seventhIngredient) }
        if(this.state.eighthIngredient !== ""){ inputedIngredients.push(this.state.eighthIngredient) }
        
        console.log(inputedIngredients.length)
        this.setState({ inputCount: inputedIngredients.length})
        fetch("http://localhost:3001/api/post", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                inputIngredients: inputedIngredients

            })
        })
        .then(response => response.json())
        .then(response => {
           this.setState({
               recipes: response
           })
        })
        

    }
    handleChange(event){
        console.log(event.target)
        this.setState({
            [event.target.name] : event.target.value
            
        })
    }
    
    render(){
        
        return(
            <div>
            <h2>Please enter ingredients of your choice</h2>
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="1..."
                    type="text"
                    name="firstIngredient"
                    value={this.state.firstIngredient}
                    onChange={this.handleChange}
                />
                <input 
                    placeholder="2..."
                    type="text"
                    name="secondIngredient"
                    value={this.state.secondIngredient}
                    onChange={this.handleChange}
                />
                <input 
                    placeholder="3..."
                    type="text"
                    name="thirdIngredient"
                    value={this.state.thirdIngredient}
                    onChange={this.handleChange}
                />
                <input 
                    placeholder="4..."
                    type="text"
                    name="fourthIngredient"
                    value={this.state.fourthIngredient}
                    onChange={this.handleChange}
                />
                <input 
                    placeholder="5..."
                    type="text"
                    name="fifthIngredient"
                    value={this.state.fifthIngredient}
                    onChange={this.handleChange}
                />
                <input 
                    placeholder="6..."
                    type="text"
                    name="sixthIngredient" //
                    value={this.state.sixthIngredient}
                    onChange={this.handleChange}
                />
                <input 
                    placeholder="7..."
                    type="text"
                    name="seventhIngredient"
                    value={this.state.seventhIngredient}
                    onChange={this.handleChange}
                />
                <input 
                    placeholder="8..."
                    type="text"
                    name="eighthIngredient"
                    value={this.state.eighthIngredient}
                    onChange={this.handleChange}
                />
                <br />
                <button>button</button>
            </form>
            
            <h2> Entered Ingredient list: </h2>
            <div>
                <span>
                {this.state.firstIngredient}
                
                {this.state.secondIngredient}
                
                {this.state.thirdIngredient}
                
                {this.state.fourthIngredient}
                
                {this.state.fifthIngredient}
                
                {this.state.sixthIngredient}
                
                {this.state.seventhIngredient}
                
                {this.state.eighthIngredient}
                </span>
            </div>
            <div>
                <h2>Your Recipes: </h2>
                <Results recipes={this.state.recipes} count={this.state.inputCount}/>
            </div>
            <div>
                <h2>Our Recommendation:</h2>
                <Recommendation recipes={this.state.recipes} count={this.state.inputCount}/>
            </div>
            </div>

        )
    }
}

export default Search

