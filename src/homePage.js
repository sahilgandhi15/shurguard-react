import React from 'react';
import { MainHeader } from './main-header'

export class HomePage extends React.Component {
  render() {
    return <MainHeader imagePath={window.location.origin + '/headerImage.jpg'}/>
  }
}