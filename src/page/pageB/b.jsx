import React from 'react'
import _ from 'lodash'
// import add from 'lodash/add'

class Button extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => { alert(_.add(1 + 1)) }}
        > click me to add
        </button>
        <button onClick={() => { this.props.load() }}>click me to getLazy</button>
      </React.Fragment>
    )
  }
}
export default Button
