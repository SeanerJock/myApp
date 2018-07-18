import React, { Component } from "react"
import {
  View,
  FlatList,
  ToastAndroid,
  Modal
} from "react-native"
import todoApp from './redux/reduces/recuces'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { App } from './components/MainApp'
import {
  createAllSelectAction,
  createAddAction,
  createShowOrHideAction,
  createItemSelectAction,
  createDeleteAction,
  createUpdateInfoAction,
  createUpdateAction
} from './redux/actions/actions'

const store = createStore(todoApp)
let keyIndex = 2;

function mapStateToProps(state) {
  return {
    data: state.data,
    show: state.show,
    updateInfo: state.updateInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createAllSelectAction: (isAllSelect) => {
      dispatch(createAllSelectAction(isAllSelect))
    },
    createAddAction: () => {
      dispatch(createAddAction(++keyIndex))
    },
    createShowOrHideAction: (isShow) => {
      dispatch(createShowOrHideAction(isShow))
    },
    createItemSelectAction: (index) => {
      dispatch(createItemSelectAction(index))
    },
    createDeleteAction: () => {
      dispatch(createDeleteAction())
    },
    createUpdateInfoAction: (title, content) => {
      dispatch(createUpdateInfoAction(title, content))
    },
    createUpdateAction: (title, content) => {
      dispatch(createUpdateAction(title, content))
    }
  }
}

const ConApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default class MainView extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConApp />
      </Provider>
    )
  }
}




