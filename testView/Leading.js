/*
 * @Author: 水痕 
 * @Date: 2017-11-17 20:47:12 
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-11-17 20:54:26
 * @version:1.0
 * @describe:引导页面
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    ToastAndroid,
    StyleSheet
} from 'react-native';

export default class Leading extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         header: () => {
                
    //         } //使用自己定义的头部
    //     }
    // }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>我是引导页面</Text>
            </View>
        )
    }
    // componentDidMount(){
    //     const { navigate} = this.props.navigation;
    //     ToastAndroid.show('1s后进入主页', ToastAndroid.SHORT);
    //     setTimeout(()=>{
    //         navigate('Home')
    //     },1000);
    // }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#f00'
    }
})
