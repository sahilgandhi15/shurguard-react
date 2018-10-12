import React from 'react';

export class NavBar extends React.Component {
  render() {
    return  <div className="section">
    <div className="main">
      <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <span className="shurguardLogo">
              <img className="headerlogo" src="./assets/logo.jpg"/> Shurguard Self Storage
            </span>
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <div className="row">
                <div className="col-sm-12">
                {([ 'Home', 'Units', 'Contact']).map((a) => 
                  <li key={a}>
                    <div className="col-lg-4 col-md-4">
                      <span>
                        <a>{a}</a>
                      </span>
                    </div>
                  </li>
                  )
                }
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
  }
}