import React from 'react'
import { util } from '../../../../util'

import './index.less'

class Title extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className='hello'>
          hello webpack - 2
        </div>
        <div>
          {util}
        </div>
      </React.Fragment>
    )
  }
}
export default Title
