import React from 'react';

export class NavBar extends React.Component {
  render() {
  return  <div class="section">
  <div class="main">
    <nav class="navbar navbar-inverse navbar-static-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <span class="shurguardLogo">
            <img class="headerlogo" src="./assets/logo.jpg"/> Shurguard Self Storage
          </span>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <div class="row">
              <div class="col-sm-12">
              {([ 'Home', 'Units', 'Contact']).map((a) => 
                <li>
                  <div class="col-lg-4 col-md-4">
                    <span>
                       <a onclick="navigation(a)">{a}</a>
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