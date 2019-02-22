import React from 'react';
import styles from './app.css';
import Ratings from 'react-ratings-declarative';


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: props.review

    }
  }


  render() {
    let dateObj = {
      "01" : "Jan",
      "02" : "Feb",
      "03" : "Mar",
      "04" : "Apr",
      "05" : "May",
      "06" : "Jun",
      "07" : "Jul",
      "08" : "Aug",
      "09" : "Sep",
      "10" : "Oct",
      "11" : "Nov",
      "12" : "Dec"
    }
    let month = dateObj[this.state.review.date[5] + this.state.review.date[6]]
    console.log(month);
    return (
      <div id="review-main-container">
        <div id="review-divider"></div>
        <div id="review-container">
          <div id="user-info-container">
            <button id="user-info-button" type="button">
              <div id="username-and-icon-container">
                <div id="user-icon-container">
                  <div id="user-icon" style={{backgroundImage: 'url("https://community.sephora.com/t5/image/serverpage/avatar-name/default-avatar/avatar-theme/sephora/avatar-collection/sephora/avatar-display-size/profile/version/2")'}}></div>
                </div>
                <div id="username-container">
                  <div id="username-container2">
                    {(this.state.review !== 0) ? <span id="username">{this.state.review.username}</span> : <span></span>}
                  </div>
                </div>
              </div>
              <div>
                <div id="user-info-container1">
                  <div id="user-attribute">
                    <b>Eye Color</b> {this.state.review.eyeColor}
                  </div>
                  <div id="user-attribute">
                    <b>Hair Color</b> {this.state.review.hairColor}
                  </div>
                  <div id="user-attribute">
                    <b>Skin Tone</b> {this.state.review.skinTone}
                  </div>
                  <div id="user-attribute">
                    <b>Skin Type</b> {this.state.review.skinType}
                  </div>

                </div>
              </div>
            </button>
          </div>
          <div id="review-text-and-star-and-button-container">
            <div>
              <div id="review-star-and-date">
                <div id="review-star">
                  <Ratings
                    rating={this.state.review.ratingsNumber}
                    widgetRatedColors="black"
                    widgetSpacings="0px"
                  >
                    <Ratings.Widget
                      widgetDimension="16px"
                      svgIconViewBox="0 0 32 32"
                      svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
                    />
                    <Ratings.Widget
                      widgetDimension="16px"
                      svgIconViewBox="0 0 32 32"
                      svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
                    />
                    <Ratings.Widget
                      widgetDimension="16px"
                      svgIconViewBox="0 0 32 32"
                      svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
                    />
                    <Ratings.Widget
                      widgetDimension="16px"
                      svgIconViewBox="0 0 32 32"
                      svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
                    />
                    <Ratings.Widget
                      widgetDimension="16px"
                      svgIconViewBox="0 0 32 32"
                      svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
                    />

                  </Ratings>
                
                </div>
                <span id="review-date">{(this.state.review.date[8] !== '0') ? this.state.review.date[8]+this.state.review.date[9] : this.state.review.date[9]}  
                {" "}{month}{" "}{this.state.review.date.slice(0, 4)}</span>

              </div>
              <div id="review-title"></div>
              <div id="review-text">{this.state.review.review}</div>
              <div id="space"></div>
              <div id="recommends"></div>
            </div>
            <div id="reviews-buttons-container">
              <div id="review-button">NOT HELPFUL{" (" +this.state.review.notHelpfulCount + ")"}</div>
              <div id="review-button" style={{marginLeft: '16px'}}>HELPFUL{" (" +this.state.review.helpfulCount + ")"}</div>
            </div>
          
          </div>
        </div>

      </div>
    )

  }
}



export default Review