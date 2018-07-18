import React, { Component } from "react"
import {
    View,
    TouchableOpacity,
    Text,
    ToastAndroid,
    Image
} from 'react-native'
/**
 * 每一项的样式组件
 */
export class ItemComponent extends Component {
    render() {
      onItemOperationerClick = () => {
        ToastAndroid.show('操作：' + this.props.info.item.title, ToastAndroid.SHORT);
      }
      let selectImg = {
        "select": require('../img/select.png'),
        "unselect": require('../img/unselect.png')
      }
      itemSelect = () => {
        this.props.itemSelect(this.props.info.index);
      }
      let isDisplay = this.props.info.item.isSelect ? selectImg['select'] : selectImg['unselect'];
      return (
        <TouchableOpacity activeOpacity={0.9} onPress={itemSelect} style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
          <Image style={{ width: 25, height: 25, marginRight: 5 }} source={isDisplay}></Image>
          <Image style={{ width: 70, height: 70 }} source={{ uri: this.props.info.item.imgUrl }} />
          <View style={{
            justifyContent: 'space-between',
            height: 70, flex: 1,
            paddingLeft: 8, paddingTop: 4, paddingBottom: 4
          }}>
            <Text>{this.props.info.item.title}</Text>
            <Text>{this.props.info.item.content}</Text>
          </View>
          <TouchableOpacity onPress={onItemOperationerClick} style={{ width: 60, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#987643' }} activeOpacity={0.6} >
            <Text>操作</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      )
    }
  }