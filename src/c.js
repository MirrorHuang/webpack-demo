import React, { Fragment } from 'react'
import add from 'lodash/add'

class LazyCom extends React.PureComponent {
  render() {
    const tmp = add(1 + 3)
    return (
      <Fragment>
        <div> {this.props.content} </div>
        <div> {url} </div>
      </Fragment>
    )
  }
}
export default LazyCom
