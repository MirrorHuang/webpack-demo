import React from 'react'

class Button extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => {  }}
        > click me to getUrl
        </button>
        <button onClick={()=>{this.props.load()}}>click me to getLazy</button>
      </React.Fragment>
    )
  }
}
export default Button
