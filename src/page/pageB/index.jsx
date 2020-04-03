import React, { lazy, Suspense } from 'react'
import ReactDom from 'react-dom'
import Title from './components/a'
import Button from './components/b'
import ButtonD from './components/d'
import Lazy from './components/lazy'

class App extends React.PureComponent {

  // state = {
  //   isShowLazy: false
  // }


  render() {
    return (
      <div>
        <Title />
        <Button load={() => { }} />
        <ButtonD />
        <Lazy
          componentPromise={import(
            /* webpackChunkName: "lazyComB" */
            './components/c'
          )} />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))