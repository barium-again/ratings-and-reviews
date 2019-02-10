import React from 'react';
import styles from './app.css';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {


    }
  }

  componentDidMount() {
    axios
      .get('/ratings')
      .then(results => {
        let reviewNum = results.data.fiveStarReviews.length + results.data.fourStarReviews.length + results.data.threeStarReviews.length 
        + results.data.twoStarReviews.length + results.data.oneStarReviews.length
        console.log(reviewNum);
        this.setState({reviewNum: reviewNum})
      })

  }

  render() {
    return (
        <div id="ratings-reviews">
          <h2 id="header">Ratings & Reviews</h2>
          <div id="write-a-review">
            <span>{this.state.reviewNum} reviews</span>
            <button id="btn-write-a-review" type="button" >Write a review</button>
          </div>
          <div id="charts">
            <div id="histogram-container">
              <table id="histogram">
                <tr>
                  <td id="histogram-label">5 stars</td>
                  <td>
                    <div id="histogram-box">
                      <div id="histogram-box-percentage"></div>

                    </div>
                  </td>

                </tr>
                

              </table>

            </div>
          </div>
        </div>
    )
  }
}

export default App;