import React from 'react';
import { Units } from './units';
import { Route, Link } from "react-router-dom";

export class ImageInfoWidget extends React.Component {
  units = () => {
   // console.log('this is:', this);
    return <Route path="/units" component={Units} />
  }

  storageTips = () => {
    console.log('this is:', this);
    // return <Route path="/units" component={Units} />
  }

  render() {
    return <ul>
      <li>
        <div id="MyImage">
          <img id="theImage" src={window.location.origin +'/testimonials.jpg'} />
          <Link to="/units">
            <button id="myButton" onClick={this.units} className="btn btn-primary">Units</button>
          </Link>
        </div>
      </li>
      <li>
        <div id="MyImage">
          <img id="theImage" src={window.location.origin + '/StorageTips.jpg'} />
          <button id="myButton" onClick={this.storageTips} className="btn btn-primary">Storage Tips</button>
        </div>
      </li>
    </ul>
  }

  
}