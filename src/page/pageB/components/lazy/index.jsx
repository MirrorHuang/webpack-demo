import React, { lazy, Suspense } from 'react'

export default class Lazy extends React.PureComponent {

  render() {
    const Component = lazy(() => this.props.componentPromise)
    return (
      <React.Fragment>
        <Suspense fallback={null}>
          <Component />
        </Suspense>
      </React.Fragment>
    )
  }
}
