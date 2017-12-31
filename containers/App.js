import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../src/components/User'
import Page from '../src/components/Page'
import * as pageActions from '../src/actions/PageActions'
import * as userActions from '../src/actions/UserActions'

class App extends Component {
  render() {
    const { user, page } = this.props
    const { getPhotos } = this.props.pageActions
    const { handleLogin } = this.props.userActions

    return (
      <div className='row'>
       <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching}/>
        <User name={user.name} handleLogin={handleLogin} error={user.error}  />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)