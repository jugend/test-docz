import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  return <button>{props.children}</button>
}

Button.propTypes = {
  name: PropTypes.string
}

Button.defaultProps = {
  name: 'Click Me'
}

export default Button
