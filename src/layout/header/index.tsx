/* Header/index.jsx */
import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <ul>
          <li><Link to="/">Home page</Link></li>
          <li><Link to="/about">About page</Link></li>
      </ul>

    )
  }
}
