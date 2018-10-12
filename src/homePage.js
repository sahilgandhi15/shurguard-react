import React from 'react';


export class HomePage extends React.Component {
  render() {
    return React.createElement(
      'button', {
        color: 'Red'
      },
      'Click Me'
    )
  }
}