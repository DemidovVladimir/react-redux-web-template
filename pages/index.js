import React from 'react'
import { connect } from 'react-redux'
import Examples from '../components/examples'
import {serverRenderClock, startClock} from "../actions/example-actions";

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    const { dispatch } = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return <Examples />
  }
}

export default connect()(Index)
