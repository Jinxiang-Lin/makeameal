import React from "react"

function Results(props){
    
    const allRecipes = props.recipes
    const exactCount = [];
    const recommendation = [];
    for(let i = 0; i < allRecipes.length; i++){
        if(allRecipes[i].ingredient_count === props.count){
            exactCount.push(allRecipes[i])
        }
        else{
            recommendation.push(allRecipes[i])
        }
    }

    
    return(
        exactCount.map( val => {
            return(
                <ul key={val.id}>
                    <li>{val.title}</li>
                    <li>{val.ingredients}</li>
                    <li>{val.directions}</li>
                    <li>{val.ingredients_string}</li>
                </ul>
                
            )
        })
    )
}


export default Results