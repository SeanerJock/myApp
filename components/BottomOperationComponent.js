import React, { Component } from "react"
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'
import { style } from '../style'
/**
 * 底部操作组件
 */
export class BottomOperationComponent extends Component {
    isAllSelect = false

    allSelect = () => {
        this.isAllSelect = !this.isAllSelect
        this.props.selectClick(this.isAllSelect)
    }
    addClick = () => {
        this.props.addClick()
    }
    updateClick = () => {
        this.props.updateClick(true)
    }
    render() {
        return (
            <View style={style.bottomContainer}>
                <TouchableOpacity onPress={this.allSelect} style={style.bottomItem} activeOpacity={0.8} >
                    <Text style={style.bottomItemFont}>全选</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.addClick} style={style.bottomItem} activeOpacity={0.8}>
                    <Text style={style.bottomItemFont}>增加</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.deleteClick} style={style.bottomItem} activeOpacity={0.8}>
                    <Text style={style.bottomItemFont}>删除</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.updateClick} style={style.bottomItem} activeOpacity={0.8}>
                    <Text style={style.bottomItemFont}>修改</Text>
                </TouchableOpacity>
            </View>
        )
    }
}