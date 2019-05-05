import React from 'react'
import { connect } from 'react-redux'
import Examples from '../components/examples'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req;

    return {}
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  render () {
    return <Examples />
  }
}

export default connect()(Index)
