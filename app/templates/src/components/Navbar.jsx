/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Link = require('./Link.jsx');

var Navbar = React.createClass({
  render() {
    return (
      <div className="navbar-top">
        <div className="container">
          <Link className="navbar-brand row" to="/">
            <span>
              <img src="/images/logo-small.png" width="38" height="38" alt="React" />
              React.js Starter Kit
            </span>
          </Link>
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
