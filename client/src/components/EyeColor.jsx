import React from 'react'
import styles from './app.css';

class EyeColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName : props.name,
      display: 'none'

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(this.state.display === 'none'){
      this.setState({display: 'solid'}, () => {
        this.props.addFilter('eyeColor', this.state.filterName)
      })
    } else {
      this.setState({display: 'none'} , () => {
        this.props.deleteFilter('eyeColor', this.state.filterName)
      })
    }

  }
  render() {
    return (
      <div id="filter-item">
        <div >
          <label id="filter-item-label">
            <input id="filter-item-input" type="checkbox" value={"" + this.state.filterName + ""}></input>
            <div id="filter-item-checkbox" onClick={this.handleClick}>
              <img id="color-img" style ={{border: this.state.display}} onClick={this.handleClick} src={(this.state.filterName === 'Gray') ? "https://www.sephora.com/img/ufe/rich-profile/eyecolor-grey.png" :`https://www.sephora.com/img/ufe/rich-profile/eyecolor-${this.state.filterName.toLowerCase()}.png`}></img>
            </div>
            <div id="filter-item-label" onClick={this.handleClick}>{this.state.filterName}</div>
          </label>
        </div>
      </div>
    )
  }
}

export default EyeColor;