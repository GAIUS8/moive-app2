import React, { Component } from 'react';
import './App.css';
import Movie from './Movie' ;


class App extends Component {

  state = {
  };

  componentWillMount() {
  }

  componentDidMount() {
    // setTimeout(fn, 000)의 형태로 작동 000 이후 fn을 실행
    setTimeout(() => {
      // this.state.greeting = "something" 이렇게 작성하면 render가 다시 재작동하지 않는다.
      this.setState({
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
          },
          {
            title: "new movies",
            poster: "data:image/jpeg;base64,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"
          }
        ]
      })

    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    });
    return movies
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..."}
      </div>
    );
  }
}

export default App;
