import React, { Component } from "react"
import {
    View,
    FlatList,
    ToastAndroid,
    Modal
} from "react-native"
import { style } from '../style'
import { BottomOperationComponent } from './BottomOperationComponent'
import { AlertComponent } from './AlertComponent'
import { ItemComponent } from './ItemComponent'
export class App extends Component {
    /**
    * 分割线
    */
    separator = () => {
        return <View style={{ height: 1, backgroundColor: '#E6E6E6', marginLeft: 8, marginRight: 8 }} ></View>
    }

    /**
     * 删除
     */
    onDeleteButtonPress = () => {
        const data = this.props.data;
        const newData = [];
        if (data.length == 0) {
            ToastAndroid.show('列表为空，不能进行删除！', ToastAndroid.SHORT);
            return;
        }
        data.forEach((item, index) => {
            if (!item.isSelect) {
                newData.push(item);
            }
        })
        if (newData.length == data.length) {
            ToastAndroid.show('请选择需要删除的项！', ToastAndroid.SHORT);
        } else {
            this.props.createDeleteAction()
        }
    }

    /**
     * 单行的修改方法
     */
    onUpdateButtonPress = () => {
        const data = this.props.data;
        let num = 0;
        let updateInfo = {};
        data.forEach((item, index) => {
            if (item.isSelect) {
                num++;
                updateInfo = item;
            }
        })
        if (num == 0) {
            ToastAndroid.show('请选择需要修改的项！', ToastAndroid.SHORT);
            return;
        }
        if (num > 1) {
            ToastAndroid.show('一次只能修改一项，请重新选择！', ToastAndroid.SHORT);
            return;
        }
        this.props.createUpdateInfoAction(updateInfo.title, updateInfo.content)
        this.props.createShowOrHideAction(true)
    }

    /**
     * 真正的更新方法
     */
    updateItem = (title, content) => {
        this.props.createUpdateAction(title, content)
        this.props.createShowOrHideAction(false)
        ToastAndroid.show('更新成功！', ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={style.container}>
                <Modal
                    visible={this.props.show}
                    transparent={true}
                    onRequestClose={() => {
                    }}
                    onShow={() => {
                    }}>
                    <AlertComponent cancelClick={this.props.createShowOrHideAction} updateInfo={this.props.updateInfo}
                        updateItem={this.updateItem}
                    />
                </Modal>
                <FlatList
                    style={{ flex: 1, backgroundColor: '#ffffff' }}
                    data={this.props.data}
                    ItemSeparatorComponent={this.separator}//设置分割线
                    refreshing={false}
                    renderItem={(info) =>
                        <ItemComponent info={info} itemSelect={this.props.createItemSelectAction} />
                    }
                />
                <BottomOperationComponent
                    selectClick={this.props.createAllSelectAction}
                    addClick={this.props.createAddAction}
                    deleteClick={this.onDeleteButtonPress}
                    updateClick={this.onUpdateButtonPress} />
            </View>
        )
    }
}