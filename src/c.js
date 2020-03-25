import React, { Fragment } from 'react'

class LazyCom extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <div> {this.props.content} </div>
        <div> {url} </div>
      </Fragment>
    )
  }
}
export default LazyCom
