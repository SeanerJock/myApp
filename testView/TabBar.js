/*
 * @Author: 水痕 
 * @Date: 2017-11-17 20:56:31 
 * @Last Modified by: 水痕
 * @Last Modified time: 2017-11-17 21:45:23
 * @version:1.0
 * @describe:定义一个tab的切换的路由
 */
import MoveList from './../components/MoveList';
import BookList from './../components/BookList';
import Message from './../components/Message';
// 引入TabNavigator组件
import { TabNavigator } from "react-navigation";
// 这个似乎要必须引入
import React,{ Component} from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';
const TabBar = TabNavigator({
    BookList: { 
        screen: BookList, // 对应组件
        navigationOptions: {
            tabBarLabel: '书籍', // 底部显示的文字
            tabBarIcon: ({ tintColor }) => {
                // tintColor传递进来的是颜色，选中的颜色,那么图标颜色也要换
                return <Image source={require('./../../images/book.png')}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            }
        }
    },
    MoveList: { 
        screen: MoveList,
        navigationOptions: {
            tabBarLabel: '电影',
            tabBarIcon: ({tintColor}) => {
                return <Image style={[styles.tabBarImage,{tintColor: tintColor}]} source={require('./../../images/move.png')}/>
            },
        }
    },
    Message: { 
        screen: Message,
        navigationOptions: {
            tabBarLabel: '消息',
            tabBarIcon: ({tintColor}) => {
                return <Image style={[styles.tabBarImage,{tintColor: tintColor}]} source={require('./../../images/message.png')}/>
            },
        }
    },
},{
    animationEnabled: true, // 切换tab的时候是否要动画
    tabBarPosition: 'bottom', // 导航的位置
    swipeEnabled: true, // 是否可以手指滑动,默认是true
    backBehavior: 'none', // 是否后退按钮导致选项卡切换到初始选项卡？如果是，将initialroute，否则没有。默认initialroute行为
    lazy:true,// 是否在需要时临时渲染选项卡，而不是提前渲染它们。（即懒加载）
    tabBarOptions: { // 关于tab的样式
        activeTintColor: '#f00', // 选中的颜色
        inactiveTintColor: '#333', // 不选中的颜色
        showIcon: true, // 是否显示小图标
        indicatorStyle: {
            height: 0,
        },
        style: { // 可以设置tab的各种样式
            backgroundColor: '#fff', // 底部tab的背景颜色
            height:60, // 高度
            borderTopWidth:1,
            borderColor:'#ddd',
        },
        tabStyle: { // 设置底部图标的样式
            height: 55,
            marginTop:10,
        },
        labelStyle: { // 设置文字的样式
            fontSize: 12,
        },
        pressColor: 'gray', // 点击的时候光圈
        pressOpacity: 0.8, // 光圈的透明度
        upperCaseLabel: false, // 如果是英文的情况默认会转换为大写
    },
});

export default TabBar;

// 定义样式
const styles = StyleSheet.create({
    tabBarImage: {
        width: 24,
        height: 24,
    }
})