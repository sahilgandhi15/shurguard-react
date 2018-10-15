import React from 'react';

export class MainHeader extends React.Component {
  render() {
    return <img className = "headerImage"
    src = {
      this.props.imagePath
    }
    />
  }
}