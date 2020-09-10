import React, { Component } from 'react';
import Tweet from './Tweet'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tweets: [
        {
          name: 'Dev ED',
          message: 'This is a random tweet',
          likes: 10
        },
        {
          name: 'John Snow',
          message: 'I am the true king',
          likes: 70
        },
        {
          name: 'Traversy Media',
          message: '700k my dudes',
          likes: 700000
        },
        {
          name: 'Mosh',
          message: 'My new course is available',
          likes: 100
        }
      ]
    }
  }
  render() {
    return(
      <div className="app">
        { this.state.tweets.map((tweet, index) => 
          <Tweet name={tweet.name} message={tweet.message} likes={tweet.likes} key={index} />
        )}
      </div>
    )
  }
}

export default App;
