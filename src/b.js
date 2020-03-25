import React from 'react'
import add from 'lodash/add'

class Button extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => { alert(add(1 + 3)) }}
        > click me to add
        </button>
        <button onClick={() => { this.props.load() }}>click me to getLazy</button>
      </React.Fragment>
    )
  }
}
export default Button
