import React from 'react'
import Title from './components/a'
import Button from './components/b'

export default class App extends React.PureComponent {

  state = { isShowLazyCom: false }

  LazyCom = null
  componentDidMount() {
    import(
      /* webpackChunkName: "lazyCom" */
      /* webpackPrefetch: true */
      './components/c'
    ).then(res => {
      const { default: LazyCom } = res;
      this.LazyCom = LazyCom
    })
  }

  getloadCom = () => {
    if (this.LazyCom) {
      this.setState({
        isShowLazyCom: true
      })
      return;
    }
    import(
      './components/c'
    ).then(res => {
      const { default: LazyCom } = res;
      this.LazyCom = LazyCom
      this.setState({
        isShowLazyCom: true
      })
    })
  }

  render() {
    const LazyCom = this.LazyCom
    const { isShowLazyCom } = this.state
    return (
      <div>
        <Title />
        <Button load={this.getloadCom} />
        {LazyCom && isShowLazyCom ?
          <LazyCom content={"I'm lazy"} />
          : null
        }
      </div>
    )
  }
}