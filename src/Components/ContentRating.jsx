
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes : 0,
        dislikes : 0,
        totalRating : 0,
        handleLike:()=>{
            this.setState((prevState) => (
                {
                    likes: prevState.likes +1,
                    totalRating : prevState.likes + 1 + prevState.dislikes
                }));


        },
        handleDisLike:()=>{
            this.setState((prevState) => (
                {
                    dislikes: prevState.dislikes+1,
                    totalRating : prevState.likes + prevState.dislikes + 1
                }));

        }
    }
  }
  render() {
    return (
     <div className='ContentRating'>
        <p>
        Here's some random text for you:

The quick brown fox jumps over the lazy dog while the sun sets behind the mountains. Meanwhile, a curious cat watches the scene from a nearby tree, wondering if it should join the fox's playful escapade. In the distance, a river flows gently, reflecting the golden hues of the evening sky. Birds chirp their final songs of the day, and the world slowly transitions into a peaceful night, where dreams and reality blend into a harmonious melody.
        </p>
        <div className='rating-buttons'>
            <button className="like-button" onClick={this.state.handleLike}>
                Like({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.state.handleDisLike}>
                Dislike({this.state.dislikes})
            </button>
            

        </div>
        <div>
        Total Ratings: ({this.state.totalRating})

        </div>
     </div>
    );
  }
}

export default ContentRating;
