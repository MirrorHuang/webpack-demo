import React from 'react'
import ReactDom from 'react-dom'
import Title from './a'
import Button from './b'

class App extends React.PureComponent {

  state = { LazyCom: null }

  getloadCom() {
    import(
      /* webpackChunkName: "lazyCom" */
      /* webpackPrefetch: true */
      './c'
    ).then(res => {
      const { default: LazyCom } = res;
      this.setState({
        LazyCom
      })
    })
  }

  render() {
    const { LazyCom } = this.state
    return (
      <div>
        <Title />
        <Button load={this.getloadCom.bind(this)} />
        {LazyCom ?
          <LazyCom content={"I'm lazy"} />
          : null
        }
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))