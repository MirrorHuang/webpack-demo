import React from 'react'
import ReactDom from 'react-dom'
import Title from './components/a'
import Button from './components/b'
import ButtonD from './components/d'

class App extends React.PureComponent {

  state = { LazyCom: null }

  getloadCom() {
    import(
      /* webpackChunkName: "lazyComB" */
      /* webpackPrefetch: true */
      './components/c'
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
        <ButtonD />
        {LazyCom ?
          <LazyCom content={"I'm lazy"} />
          : null
        }
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))