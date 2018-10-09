import React, { Component } from 'react';
import './App.css';
import Movie from './Movie' ;

const movies = [
  {
    id: 1,
    title: "Matrix",
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
  },
  {
    id: 2,
    title: "Full Metal Jacket",
    poster: "http://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg"
  },
  {
    id: 3,
    title: "Oldboy",
    poster: "https://www.gannett-cdn.com/-mm-/421fa88894207f6fd125837bfbea3a215d8338a7/c=972-205-2409-1017/local/-/media/2016/10/18/USATODAY/USATODAY/636124053572235005-101816orange-cat-thinkstock.jpg?width=3200&height=1680&fit=crop"
  },
  {
    id: 4,
    title: "Star Wars",
    poster: "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
