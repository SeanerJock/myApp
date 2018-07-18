import * as ActionTypes from './ActionTypes'
/**
 * 创建全选的action
 */
export const createAllSelectAction = (isSelect) => {
    return {
        type: ActionTypes.ALL_SELECT,
        isSelect: isSelect
    }
}
/**
 * 创建添加的action
 * @param {*} keyIndex 添加数据的key
 */
export const createAddAction = (keyIndex) => {
    return {
        type: ActionTypes.ADD,
        keyIndex: keyIndex
    }
}
export const createShowOrHideAction = (isShow) => {
    return {
        type: ActionTypes.SHOW_OR_HIDE,
        isShow: isShow
    }
}
export const createItemSelectAction = (index) => {
    return {
        type: ActionTypes.ITEM_SELECT,
        index: index
    }
}

export const createDeleteAction = () => {
    return {
        type: ActionTypes.DELDTE
    }
}

export const createUpdateInfoAction = (title, content) => {
    return {
        type: ActionTypes.UPDATE_INFO,
        title: title,
        content: content
    }

}
export const createUpdateAction = (title, content) => {
    return {
        type: ActionTypes.UPDATE,
        title: title,
        content: content
    }

}


