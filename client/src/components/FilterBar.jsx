import React from 'react';
import styles from './app.css';
import QuestionMark from './QuestionMark.jsx'

class FilterBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortByDisplay: 'none',
      sortByFilter : 'Most Helpful',
      filterBarDisplay: 'none',
      toggle: false,
      toggleA: false,
      toggleC: false,
      toggleE: false,
      toggleG: false,
      toggleI: false,
      toggleK: false,
      toggleM: false

    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    if(this.state.toggleA){
      if(!this.nodeA.contains(e.target) && !this.nodeB.contains(e.target)){
        this.setState({toggle:false, toggleA: false})
      }
    }
    if(this.state.toggleC){
      if(!this.nodeC.contains(e.target) && !this.nodeD.contains(e.target)){
        this.setState({toggle:false, toggleC: false})
      }
    }
    if(this.state.toggleE){
      if(!this.nodeE.contains(e.target) && !this.nodeF.contains(e.target)){
        this.setState({toggle:false, toggleE: false})
      }
    }
    if(this.state.toggleG){
      if(!this.nodeG.contains(e.target) && !this.nodeH.contains(e.target)){
        this.setState({toggle:false, toggleG: false})
      }
    }
    if(this.state.toggleI){
      if(!this.nodeI.contains(e.target) && !this.nodeJ.contains(e.target)){
        this.setState({toggle:false, toggleI: false})
      }
    }
    if(this.state.toggleK){
      if(!this.nodeK.contains(e.target) && !this.nodeL.contains(e.target)){
        this.setState({toggle:false, toggleK: false})
      }
    }
    if(this.state.toggleM){
      if(!this.nodeM.contains(e.target) && !this.nodeN.contains(e.target)){
        this.setState({toggle:false, toggleM: false})
      }
    }

  }

  render() {
    if(this.state.toggle){
      document.addEventListener('mousedown', this.handleClick, false)
    } else {
      document.removeEventListener('mousedown', this.handleClick, false)
    }

    return (
      <div id="filter-bar-container">
        <div id="show-reviews-from-container1">
          <div id="show-reviews-from">
            <label id="show-reviews-from-label">
              <input id="check-box-input" name="beautyMatch" aria-label="Show reviews from my Beauty Matches" type="checkbox"></input>
              <div id="check-box">
                <svg viewBox="0 0 32 32" style={{display: "none"}}>
                  <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                </svg>
              </div>
              <div id="check-box-label">  
                <div id="show-reviews-from-container">
                  <span id="show-reviews-span">Show reviews from my </span>
                  <div id="beauty-match-badge">
                    <svg viewBox="0 0 20 13" aria-hidden="true" id="badge" data-comp="IconVenn Icon Box">
                      <path d="M13.5 0C12.2 0 11 .4 10 1 9 .4 7.8 0 6.5 0 2.9 0 0 2.9 0 6.4c0 3.6 2.9 6.4 6.5 6.4 1.2 0 2.4-.4 3.4-1 1 .7 2.3 1.1 3.6 1.1 3.6 0 6.5-2.9 6.5-6.5C20 2.9 17.1 0 13.5 0zm-7 11.9c-3 0-5.5-2.4-5.5-5.4S3.5 1 6.5 1c.9 0 1.8.2 2.6.7-1.3 1.2-2.2 2.9-2.2 4.8s.8 3.6 2.1 4.7c-.7.4-1.6.7-2.5.7zm3.4-1.2C8.7 9.7 8 8.2 8 6.5s.8-3.2 2-4.2c1.2 1 2 2.5 2 4.2-.1 1.7-.9 3.2-2.1 4.2zm3.6 1.3c-1 0-1.9-.3-2.7-.7 1.4-1.2 2.2-2.9 2.2-4.8s-.8-3.6-2.1-4.8c.7-.4 1.6-.7 2.6-.7 3 0 5.5 2.5 5.5 5.5S16.5 12 13.5 12z"></path>
                    </svg>
                    <span id="show-reviews-span" style={{fontWeight: "bold"}}> Beauty Matches </span>
        
                  </div>
                </div>
              </div>
            </label>
            <QuestionMark />
          </div>
        </div>
        {/* <div id="show-reviews-from-container"> */}
          
          <div>
            <div>
              <div id="filter-bar-container2">
                <div id="filter-bar">
                  <button id="filter-button" type="button" onClick={() => {
                    if(this.state.filterBarDisplay === 'none'){
                      this.setState({filterBarDisplay : 'block'})
                    } else {
                      this.setState({filterBarDisplay: 'none'})
                    }
                  }}>
                    <span id="filter-text">Filter</span>
                    <svg viewBox="0 0 95 57" id="filter-button-svg">
                      <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
                    </svg>
                  </button>
                  <div id="filter-bar-divider"></div>
                  <div id="filter-bar-sort-by-container">
                    <div id="filter-bar-sort-by" onClick={()=> {
                      if(this.state.sortByDisplay === 'none') {
                        this.setState({sortByDisplay: 'block'})
                      } else {
                        this.setState({sortByDisplay: 'none'})
                      }
                    }}>
                      <span id="filter-text">Sort by: <b>{this.state.sortByFilter}</b></span>
                      <svg viewBox="0 0 95 57" id="filter-bar-sort-by-svg">
                        <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
                      </svg>
                    </div>
                    <div id="sort-by-drop-down-menu-container" style={{display: this.state.sortByDisplay}}>
                      <div id="sort-by-drop-down-menu-container2">
                        <div id="sort-by-drop-down-menu-container3">
                          <div id="sort-by-menu">
                            <div id="sort-by-menu-item">
                              <div id="item1-container" role="button">
                                <span id="item-container">
                                  <span id="sort-by-item" onClick={() => this.setState({sortByFilter: "Most Helpful", sortByDisplay: 'none'})}>Most Helpful</span>
                                </span>
                              </div>
                            </div>
                            <div id="sort-by-menu-item">
                              <div id="item2-container" role="button">
                                <span id="item-container">
                                  <span id="sort-by-item" onClick={() => this.setState({sortByFilter: "Newest", sortByDisplay: 'none'})}>Newest</span>
                                </span>
                              </div>
                            </div>
                            <div id="sort-by-menu-item">
                              <div id="item2-container" role="button">
                                <span id="item-container">
                                  <span id="sort-by-item" onClick={() => this.setState({sortByFilter: "Oldest", sortByDisplay: 'none'})}>Oldest</span>
                                </span>
                              </div>
                            </div>
                            <div id="sort-by-menu-item">
                              <div id="item2-container" role="button">
                                <span id="item-container">
                                  <span id="sort-by-item" onClick={() => this.setState({sortByFilter: "Highest Rating", sortByDisplay: 'none'})}>Highest Rating</span>
                                </span>
                              </div>
                            </div>
                            <div id="sort-by-menu-item">
                              <div id="item2-container" role="button">
                                <span id="item-container">
                                  <span id="sort-by-item" onClick={() => this.setState({sortByFilter: "Lowest Rating", sortByDisplay: 'none'})}>Lowest Rating</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="filter-drop-down-container" style={{display: this.state.filterBarDisplay}}>
                <div id="filter-drop-down-divider"></div>
                <div id="filter-drop-down-menu">

                  <div id="filter-menu-item-container">
                    <div id="filter-item" ref={node => this.nodeA = node} onClick={() => this.setState({toggle: !this.state.toggle, toggleA: !this.state.toggleA})}>
                      Content
                      <svg viewBox="0 0 95 57" id="filter-item-svg">
                        <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
                      </svg>
                    </div>
                    <div id="filter-item-menu-container" ref={node => this.nodeB = node} style={this.state.toggleA ? {display: 'block'}: {display: 'none'}}>
                    {/* style={toggle ? {display: 'block'}: {display: 'none'}} */}
                      <div id="filter-item-menu">
                      
                        <div id="filter-item-container">
                          <div id="filter-item-container2">
                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Photos</div>
                                </label>
                              </div>
                            </div>
                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Video"></input>
                                  <div id="filter-item-checkbox">
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Video</div>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="filter-menu-button-container">
                          <div id="filter-menu-button" >
                            <button id="filter-menu-reset-button" type="button">Reset</button>
                          </div>
                          <div id="filter-menu-button">
                            <button id="filter-menu-done-button" type="button">Done</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="filter-menu-item-container">
                    <div id="filter-item" ref={node => this.nodeC = node} onClick={() => this.setState({toggle: !this.state.toggle, toggleC: !this.setState.toggleC})}>
                      Eye Color
                      <svg viewBox="0 0 95 57" id="filter-item-svg">
                        <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
                      </svg>
                    </div>
                    <div id="filter-item-menu-container" ref={node => this.nodeD = node} style={this.state.toggleC ? {display: 'block'}: {display: 'none'}}>
                      <div id="filter-item-menu">
                      
                        <div id="filter-item-container">
                          <div id="filter-item-container2">
                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/eyecolor-blue.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Blue</div>
                                </label>
                              </div>
                            </div>
                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Video"></input>
                                  <div id="filter-item-checkbox">
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/eyecolor-brown.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Brown</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/eyecolor-green.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Green</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/eyecolor-grey.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Gray</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/eyecolor-hazel.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Hazel</div>
                                </label>
                              </div>
                            </div>


                          </div>
                        </div>
                        <div id="filter-menu-button-container">
                          <div id="filter-menu-button" >
                            <button id="filter-menu-reset-button" type="button">Reset</button>
                          </div>
                          <div id="filter-menu-button">
                            <button id="filter-menu-done-button" type="button">Done</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div id="filter-menu-item-container">
                    <div id="filter-item" ref={node => this.nodeE = node} onClick={() => this.setState({toggle: !this.state.toggle, toggleE: !this.state.toggleE})}>
                      Hair Color
                      <svg viewBox="0 0 95 57" id="filter-item-svg">
                        <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
                      </svg>
                    </div>
                    <div id="filter-item-menu-container" ref={node => this.nodeF = node} style={this.state.toggleE ? {display: 'block'}: {display: 'none'}}>
                      <div id="filter-item-menu">
                      
                        <div id="filter-item-container">
                          <div id="filter-item-container2">
                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/haircolor-blonde.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Blonde</div>
                                </label>
                              </div>
                            </div>
                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Video"></input>
                                  <div id="filter-item-checkbox">
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/haircolor-brunette.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Brunette</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/haircolor-auburn.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Auburn</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/haircolor-black.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Black</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/haircolor-red.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Red</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/haircolor-gray.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Gray</div>
                                </label>
                              </div>
                            </div>


                          </div>
                        </div>
                        <div id="filter-menu-button-container">
                          <div id="filter-menu-button" >
                            <button id="filter-menu-reset-button" type="button">Reset</button>
                          </div>
                          <div id="filter-menu-button">
                            <button id="filter-menu-done-button" type="button">Done</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div id="filter-menu-item-container">
                    <div id="filter-item" ref={node => this.nodeG = node} onClick={() => this.setState({toggle: !this.state.toggle, toggleG: !this.state.toggleG})}>
                      Skin Tone
                      <svg viewBox="0 0 95 57" id="filter-item-svg">
                        <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
                      </svg>
                    </div>
                    <div id="filter-item-menu-container" ref={node => this.nodeH = node} style={this.state.toggleG ? {display: 'block'}: {display: 'none'}}>
                      <div id="filter-item-menu">
                      
                        <div id="filter-item-container">
                          <div id="filter-item-container2">
                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/skintone-porcelain.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Porcelain</div>
                                </label>
                              </div>
                            </div>
                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Video"></input>
                                  <div id="filter-item-checkbox">
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/skintone-fair.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Fair</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/skintone-light.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Light</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/skintone-medium.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Medium</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/skintone-tan.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Tan</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/skintone-olive.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Olive</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/skintone-deep.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Deep</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/skintone-dark.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Dark</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    {/* <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg> */}
                                    <img id="color-img" src="https://www.sephora.com/img/ufe/rich-profile/skintone-ebony.png" ></img>
                                  </div>
                                  <div id="filter-item-label">Ebony</div>
                                </label>
                              </div>
                            </div>


                          </div>
                        </div>
                        <div id="filter-menu-button-container">
                          <div id="filter-menu-button" >
                            <button id="filter-menu-reset-button" type="button">Reset</button>
                          </div>
                          <div id="filter-menu-button">
                            <button id="filter-menu-done-button" type="button">Done</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div id="filter-menu-item-container">
                    <div id="filter-item" ref={node => this.nodeI = node} onClick={() => this.setState({toggle: !this.state.toggle, toggleI: !this.state.toggleI})}>
                      Skin Type
                      <svg viewBox="0 0 95 57" id="filter-item-svg">
                        <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
                      </svg>
                    </div>
                    <div id="filter-item-menu-container" ref={node => this.nodeJ = node} style={this.state.toggleI ? {display: 'block'}: {display: 'none'}}>
                      <div id="filter-item-menu">
                      
                        <div id="filter-item-container">
                          <div id="filter-item-container2">
                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Normal</div>
                                </label>
                              </div>
                            </div>
                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Video"></input>
                                  <div id="filter-item-checkbox">
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg2" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Combination</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Dry</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div id="filter-item2">
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Oily</div>
                                </label>
                              </div>
                            </div>

                          </div>
                        </div>
                        <div id="filter-menu-button-container">
                          <div id="filter-menu-button" >
                            <button id="filter-menu-reset-button" type="button">Reset</button>
                          </div>
                          <div id="filter-menu-button">
                            <button id="filter-menu-done-button" type="button">Done</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div id="filter-menu-item-container">
                    <div id="filter-item" ref={node => this.nodeK = node} onClick={() => this.setState({toggle: !this.state.toggle, toggleK: !this.state.toggleK})}>
                      Age Range
                      <svg viewBox="0 0 95 57" id="filter-item-svg">
                        <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
                      </svg>
                    </div>
                    <div id="filter-item-menu-container" ref={node => this.nodeL = node} style={this.state.toggleK ? {display: 'block'}: {display: 'none'}}>
                      <div id="filter-item-menu">
                      
                        <div id="filter-item-container">
                          <div id="filter-item-container2">
                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">13-17</div>
                                </label>
                              </div>
                            </div>
                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Video"></input>
                                  <div id="filter-item-checkbox">
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">18-24</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">25-34</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div id="filter-item2">
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">35-44</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div id="filter-item2">
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">45-54</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div id="filter-item2">
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg2" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Over 54</div>
                                </label>
                              </div>
                            </div>

                          </div>
                        </div>
                        <div id="filter-menu-button-container">
                          <div id="filter-menu-button" >
                            <button id="filter-menu-reset-button" type="button">Reset</button>
                          </div>
                          <div id="filter-menu-button">
                            <button id="filter-menu-done-button" type="button">Done</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="filter-menu-item-container">
                    <div id="filter-item" ref={node => this.nodeM = node} onClick={() => this.setState({toggle: !this.state.toggle, toggleM: !this.state.toggleM})}>
                      Skin Concerns
                      <svg viewBox="0 0 95 57" id="filter-item-svg">
                        <path d="M47.5 57L95 9.5 85.5 0l-38 38-38-38L0 9.5 47.5 57z"></path>
                      </svg>
                    </div>
                    <div id="filter-item-menu-container" ref={node => this.nodeN = node} style={this.state.toggleM ? {display: 'block'}: {display: 'none'}}>
                      <div id="filter-item-menu">
                      
                        <div id="filter-item-container">
                          <div id="filter-item-container2">
                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Acne</div>
                                </label>
                              </div>
                            </div>
                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Video"></input>
                                  <div id="filter-item-checkbox">
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Aging</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div >
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg2" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Blackheads</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div id="filter-item2">
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Calluses</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div id="filter-item2">
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Cellulite</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div id="filter-item2">
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg2" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Cuticles</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div id="filter-item2">
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg2" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Dark Circles</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div id="filter-item2">
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg2" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Dullness</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div id="filter-item2">
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg2" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Redness</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div id="filter-item2">
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg2" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Sensitivity</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div id="filter-item2">
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg2" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Stretch Marks</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div id="filter-item2">
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg2" style={{display: 'none'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Sun Damage</div>
                                </label>
                              </div>
                            </div>

                            <div id="filter-item">
                              <div id="filter-item2">
                                <label id="filter-item-label">
                                  <input id="filter-item-input" type="checkbox" value="Photos"></input>
                                  <div id="filter-item-checkbox" >
                                    <svg viewBox="0 0 32 32" id="filter-item-checkbox-svg3" style={{display: 'block'}}>
                                      <path d="M1 14 L5 10 L13 18 L27 4 L31 8 L13 26 z"></path>
                                    </svg>
                                    <div id="checkbox-box"></div>
                                  </div>
                                  <div id="filter-item-label">Uneven Skin Tones</div>
                                </label>
                              </div>
                            </div>

                          </div>
                        </div>
                        <div id="filter-menu-button-container">
                          <div id="filter-menu-button" >
                            <button id="filter-menu-reset-button" type="button">Reset</button>
                          </div>
                          <div id="filter-menu-button">
                            <button id="filter-menu-done-button" type="button">Done</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    )

  }
}

export default FilterBar

