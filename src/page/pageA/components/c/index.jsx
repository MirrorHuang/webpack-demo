import React, { Fragment } from 'react'
import add from 'lodash/add'
import cls from 'classnames'
import './index.less'
class LazyCom extends React.PureComponent {
  render() {
    const tmp = add(1 + 3)
    return (
      <Fragment>
        <div className={cls('content', 'hello')} > { this.props.content } </div>
        <div> {tmp} </div>
      </Fragment>
    )
  }
}
export default LazyCom
