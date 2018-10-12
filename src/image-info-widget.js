import React from 'react';

export class ImageInfoWidget extends React.Component {
  render() {
    return <ul>
      <li>
        <div id="MyImage">
          <img id="theImage" src="./assets/testimonials.jpg" />
          <button id="myButton" onClick="units()" class="btn btn-primary">Units</button>
        </div>
      </li>
      <li>
        <div id="MyImage">
          <img id="theImage" src="./assets/StorageTips.jpg" />
          <button id="myButton" onClick="storageTips()" class="btn btn-primary">Storage Tips</button>
        </div>
      </li>
    </ul>
  }
}