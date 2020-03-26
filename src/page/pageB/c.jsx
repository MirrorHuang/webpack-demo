import React, { Fragment } from 'react'
import _ from 'lodash'

class LazyCom extends React.PureComponent {
  render() {
    const tmp = _.add(1 + 1)
    return (
      <Fragment>
        <div> {this.props.content} </div>
        <div> {tmp} </div>
      </Fragment>
    )
  }
}
export default LazyCom
