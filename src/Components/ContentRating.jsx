
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0
      };
  }
  render() {
    return (
     <div className='content-rating'>
        <p>
        JSX JavaScript XML syntax is similar to HTML, 
        and it is used by React to describe what the UI 
        should look like. It extends ECMAScript by allowing 
        HTML-like code to be written within JavaScript, 
        which gets transpiled to React.createElement calls.
        </p>
     </div>
    );
  }
}

export default ContentRating;
