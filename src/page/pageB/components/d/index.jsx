import React from 'react'
import _ from 'lodash'

class ButtonD extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div>d</div>
        <button
          onClick={() => { alert(_.add(1 + 100)) }}
        > click me
        </button>
      </React.Fragment>
    )
  }
}
export default ButtonD
