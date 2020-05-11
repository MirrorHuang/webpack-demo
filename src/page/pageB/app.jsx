import React, { lazy, Suspense } from 'react'
import ReactDom from 'react-dom'
import Title from './components/a'
import Button from './components/b'
import ButtonD from './components/d'
import Lazy from './components/lazy'

export default class App extends React.PureComponent {

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