import React, { Component } from "react";
 
class MenuButton extends Component {
  render() {
    return (
      <div onMouseDown={this.props.handleMouseDown}>
        <svg className="openbtn" version="1.1" id="&#x56FE;&#x5C42;_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" xmlSpace="preserve">
          <path d="M0,15.276h64v1H0V15.276z M0,1.276h64v-1H0V1.276z M53.34,33.5v7.053c0,2.294,1.625,3.947,4.33,3.947
            c2.705,0,4.33-1.653,4.33-3.947V33.5h-1.36v6.963c0,1.624-1.081,2.8-2.97,2.8s-2.97-1.177-2.97-2.8V33.5H53.34z M36.161,44.247V33.5
            h1.322l5.917,8.364h0.121V33.5h1.345v10.747h-1.322l-5.917-8.334h-0.121v8.334H36.161z M27.99,44.247h-6.756V33.5h6.756v1.207
            h-5.396v3.448h5.116v1.192h-5.116v3.694h5.396C27.99,43.041,27.99,44.247,27.99,44.247z M11.477,44.247V36.04h-0.091l-3.438,8.207
            H6.799L3.36,36.04H3.27v8.207H2V33.5h1.579l3.733,8.967h0.121l3.733-8.967h1.579v10.747H11.477z"/>
        </svg>
      </div>
    );
  }
}
 
export default MenuButton;