import React, { Component } from 'react';
import './App.css';
import Movie from './Movie' ;


class App extends Component {

  state = {
    greeting: "Hello!",
    movies: [
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
    ]
  };

  componentWillMount() {
  }

  componentDidMount() {
    // setTimeout(fn, 000)의 형태로 작동 000 이후 fn을 실행
    setTimeout(() => {
      // this.state.greeting = "something" 이렇게 작성하면 render가 다시 재작동하지 않는다.
      this.setState({
        greeting: "Hello again!"
      })

    }, 5000)
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
