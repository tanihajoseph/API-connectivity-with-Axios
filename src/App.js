import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import MealList from './components/MealList';
import MealForm from './components/MealForm';

function App() {
  return (
    <div>
    <Router>
        <Route path="/" component={MealForm} />
        <Route exact path="/retrieve" component={MealList} />
    </Router>
    </div>
  );
}

export default App;