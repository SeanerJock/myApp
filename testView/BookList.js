/*
 * @Author: 水痕 
 * @Date: 2017-11-17 19:53:27 
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-11-18 16:20:29
 * @version:1.0
 * @describe:创建一个书籍的列表页面 
 */
import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Button,
    StatusBar
} from 'react-native';
export default class BookList extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null, // 隐藏头部
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <StatusBar backgroundColor="#f00" barStyle="light-content" />
                <Text>我是书籍列表</Text>
                <Button title="按钮" onPress={()=>navigate('BookDetail',{ bookId: '10000' })}/>
            </View>
        )
    }
}
