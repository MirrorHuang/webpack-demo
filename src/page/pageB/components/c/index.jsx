import React, { Fragment } from 'react'
import _ from 'lodash'

import './index.less'
class LazyCom extends React.PureComponent {
  render() {
    const tmp = _.add(1 + 1)
    return (
      <Fragment>
        <div className='content'> {this.props.content} </div>
        <div> {tmp} </div>
      </Fragment>
    )
  }
}
export default LazyCom
