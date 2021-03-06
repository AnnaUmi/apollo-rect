import React, { Component } from 'react';
import './App.css';
import {Query} from 'react-apollo';
import {GET_ALL_RECIPES} from '../queries';
import RecipeItem from './Recipe/RecipeItem';

class App extends Component {
  render() {
    return (
      <div className="App">
    <h1>Home</h1>
    <Query query={GET_ALL_RECIPES}>
      {({data, loading, error}) => {
        if(loading) return <div>loading</div>
        if(error) return <div>error</div>
        return (
          <ul>
            {data.getAllRecipes.map(recipe => {
              return <RecipeItem key={recipe._id} {...recipe}/>
            })}
          </ul>
        )
      }}
    </Query>
  </div>
    );
  }
}

export default App;
