import React from 'react';
import { MainHeader } from './main-header';
import { MainFooter } from './footer';
import { About } from './about';
import { ImageInfoWidget } from './image-info-widget';

export class Container extends React.Component {
  render() {
    return <div><MainHeader imagePath={ window.location.origin + '/headerImage.jpg'}></MainHeader>
          <div className="section">
            <div className="row">
              <div className="col-sm-12">
                <ImageInfoWidget/>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <About/>
              </div>
            </div>
          </div>
          <MainFooter/>
      </div>
  }
}