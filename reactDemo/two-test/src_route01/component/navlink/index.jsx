import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class index extends Component {
  render() {
    return (
         
      <div>
            <NavLink activeClassName="accc" {...this.props}>{this.props.children}</NavLink>
      </div>
    )
  }
}
