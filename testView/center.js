import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
export default class BookDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => <HeaderCom backgEvent={()=>navigation.goBack()} title="书籍详细页面"/>, //使用自己定义的头部
        }
    }
    render() {
        return (
            <View>
                <Text>我的书籍详细页面</Text>
            </View>
        )
    }
}