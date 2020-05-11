import React from 'react'
import Title from './components/a'
import Button from './components/b'
import ButtonD from './components/d'
import Lazy from './components/lazy'

export default class App extends React.PureComponent {

  render() {
    return (
      <div>
        <Title />
        <Button load={() => { 
          console.log('load button')
        }} />
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