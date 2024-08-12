
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state= {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
        handlelike:() => {
            this.setState((prevstate) => ({
                likes: prevstate.likes+1
            }))
        },
        handledislike:()=> {
            this.setState((prevstate) => ({
                dislikes: prevstate.dislikes+1
            }))
        },
        handletotalRatings:() => {
            this.setState()
        }
    }
  }
  render() {
    return (
     <>
    <div className='content-rating'>
         <p>Add text here</p>
         <div className='rating-buttons'>
           <button className='like-button' onClick={this.state.handlelike}>
            Like ({this.state.likes})
            </button>
            <button className='dislike-button' onClick={this.state.handledislike}>
            Dislike ({this.state.dislikes})
            </button>
          </div> 
     </div>
     
     </>
    
    );
  }
}

export default ContentRating;
