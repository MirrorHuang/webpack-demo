import React, { Fragment } from 'react'

class LazyCom extends React.PureComponent {
  render() {
    const url = getDPAppPoiCommentPageUrl(113231)
    return (
      <Fragment>
        <div> {this.props.content} </div>
        <div> {url} </div>
      </Fragment>
    )
  }
}
export default LazyCom
