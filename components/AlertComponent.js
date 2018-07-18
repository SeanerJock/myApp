import React, { Component } from "react"
import {
  View,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native'
import { style } from '../style'
/**
 * 弹出组件
 */
export class AlertComponent extends Component {

  inputTitleTextChange = (text) => {
    this.title = (text);
  }

  inputContentTextChange = (text) => {
    this.content = (text);
  }

  submit = () => {
    this.props.updateItem(this.title, this.content);
  }
  title = this.props.updateInfo.title;
  content = this.props.updateInfo.content;
  cancelClick = () => {
    this.props.cancelClick(false)
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <View style={{ width: 275, backgroundColor: 'white', alignItems: 'center' }} >
          <Text style={{ fontSize: 20, marginTop: 8, marginBottom: 8 }} >修改信息</Text>
          <View style={{ flexDirection: 'row', marginTop: 8, marginBottom: 8, alignItems: 'center' }}>
            <Text style={{ fontSize: 16, marginLeft: 8 }}>标题：</Text>
            <TextInput
              underlineColorAndroid="transparent"
              onChangeText={this.inputTitleTextChange}
              defaultValue={this.props.updateInfo.title}
              style={{ flex: 1, height: 32, borderWidth: 1, borderColor: 'gray', marginRight: 8, padding: 0, paddingLeft: 3 }} ></TextInput>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 8 }}>
            <Text style={{ fontSize: 16, marginLeft: 8 }}>信息：</Text>
            <TextInput
              underlineColorAndroid="transparent"
              onChangeText={this.inputContentTextChange}
              defaultValue={this.props.updateInfo.content}
              style={{ flex: 1, height: 32, borderWidth: 1, borderColor: 'gray', marginRight: 8, padding: 0, paddingLeft: 3 }} ></TextInput>
          </View>
          <View style={{ height: 35, flexDirection: 'row', marginTop: 8 }}>
            <TouchableOpacity onPress={this.cancelClick} style={style.bottomItem} activeOpacity={0.8}>
              <Text style={style.bottomItemFont}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.submit} style={style.bottomItem} activeOpacity={0.8}>
              <Text style={style.bottomItemFont}>修改</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
