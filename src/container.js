import React from 'react';
import { MainHeader } from './main-header';
import { MainFooter } from './footer';
import { About } from './about';

export class Container extends React.Component {
render() {
return <div><MainHeader imagePath="imagePath"></MainHeader>
      <div class="section">
        <div class="row">
          <div class="col-sm-12">
            <ImageInfoWidget/>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <About/>
          </div>
        </div>
      </div>
      <MainFooter/>
    </div>
  }
}