import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StarRating from './StarRating';

const Test = () => {
const [movieRating, setMovieRating] = useState(0)

  return (
    <div>
    <StarRating color='blue' onSetRate = {setMovieRating}/>
    <p>this movie is rated {movieRating}</p>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App /> 
    <StarRating defaultRating = {3}/>
    <StarRating  color='red' size={60} messages={['Very Bad', 'Bad', 'Good', 'Very Good', 'Amazing']}/>
    <Test /> 
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
