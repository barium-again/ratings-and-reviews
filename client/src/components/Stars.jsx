import React from 'react';
import styles from './app.css';
import axios from 'axios'
import Ratings from 'react-ratings-declarative';


const Stars = (props) => {
  var ratingAverage = props.newRating
  // console.log(rating)
  // console.log(parseFloat(props.newRating))
  console.log(rating);
  return (
      <div>
        {/* {rating} */}
          <Ratings
            rating={ratingAverage}
            widgetRatedColors="black"
            widgetSpacings="0px"
            // changeRating={this.changeRating}
          >
            <Ratings.Widget
              widgetDimension="20px"
              svgIconViewBox="0 0 32 32"
              svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
            />
            <Ratings.Widget
              widgetDimension="20px"
              svgIconViewBox="0 0 32 32"
              svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
            />
            <Ratings.Widget
              widgetDimension="20px"
              svgIconViewBox="0 0 32 32"
              svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
            />
            <Ratings.Widget
              widgetDimension="20px"
              svgIconViewBox="0 0 32 32"
              svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
            />
            <Ratings.Widget
              widgetDimension="20px"
              svgIconViewBox="0 0 32 32"
              svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
            />

          </Ratings>
          <button onClick={() => console.log(props)}>button</button>
        </div>
  )
}

// class Stars extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state ={

//     }
//   }
//   render() {

//   }
// }

// class Stars extends React.Component {
//   constructor(props) {
//   // changeRating( newRating ) {
//     super(props);
//     console.log(props);
//     this.state ={
//       // rating: parseFloat(this.props.newRating)
//     };
//   }

//   componentDidMount() {
//     console.log(this.props)
    
//     this.setState({rating: parseFloat(this.props.newRating)})
//   }

//   render() {
//     // console.log(newRating);
//     return (
//       <div>
//         <Ratings
//           rating={4.2}
//           widgetRatedColors="black"
//           widgetSpacings="0px"
//           // changeRating={this.changeRating}
//         >
//           <Ratings.Widget
//             widgetDimension="20px"
//             svgIconViewBox="0 0 32 32"
//             svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
//           />
//           <Ratings.Widget
//             widgetDimension="20px"
//             svgIconViewBox="0 0 32 32"
//             svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
//           />
//           <Ratings.Widget
//             widgetDimension="20px"
//             svgIconViewBox="0 0 32 32"
//             svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
//           />
//           <Ratings.Widget
//             widgetDimension="20px"
//             svgIconViewBox="0 0 32 32"
//             svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
//           />
//           <Ratings.Widget
//             widgetDimension="20px"
//             svgIconViewBox="0 0 32 32"
//             svgIconPath="M16 0l4.9 10.5L32 12.2l-8 8.2L25.9 32 16 26.5 6.1 32 8 20.4l-8-8.2 11.1-1.7L16 0z"
//           />

//         </Ratings>
//         <button onClick={() => console.log(this.props)}>button</button>
//         </div>
//     );
//   }
// }


export default Stars