import { combineReducers } from 'redux'
import {
    ALL_SELECT,
    ADD,
    SHOW_OR_HIDE,
    ITEM_SELECT,
    DELDTE,
    UPDATE_INFO,
    UPDATE
} from '../actions/ActionTypes'
const initData = () => {
    const data = [];
    let keyIndex = 0;
    for (var i = 0; i < 3; i++) {
        keyIndex = i;
        const item = { key: `${keyIndex}`, isSelect: false, title: '第' + keyIndex + '个标题', content: '第' + keyIndex + '个内容', imgUrl: 'http://pic3.16pic.com/00/07/65/16pic_765209_b.jpg' };
        data.push(item);
    }
    return data;
}

const initUpdateInfo = { key: '', isSelect: true, title: ' ', content: ' ', imgUrl: '' }

/**
 * 数据更新的reducer
 * @param {*} state 
 * @param {*} action 
 */
function updateData(state = initData(), action) {
    switch (action.type) {
        case ALL_SELECT:
            return state.map((item) => {
                return Object.assign({}, item, {
                    isSelect: action.isSelect
                })
            })
        case ADD:
            return [
                ...state,
                {
                    key: `${action.keyIndex}`,
                    isSelect: false,
                    title: '第' + action.keyIndex + '个标题',
                    content: '第' + action.keyIndex + '个内容',
                    imgUrl: 'http://pic3.16pic.com/00/07/65/16pic_765209_b.jpg'
                }
            ]
        case ITEM_SELECT:
            const newState = state.slice();
            newState[action.index] = Object.assign({}, state[action.index], {
                isSelect: !state[action.index].isSelect
            })
            return newState

        case DELDTE:
            return state.filter(item =>
                item.isSelect === false
            )
        case UPDATE:
            return state.map((item) => {
                if (item.isSelect) {
                    return Object.assign({}, item, {
                        title: action.title,
                        content: action.content
                    })
                }
                return item
            })
        default:
            return state
    }

}

function showOrHide(state = false, action) {
    switch (action.type) {
        case SHOW_OR_HIDE:
            return action.isShow
        default:
            return state
    }
}

function updateInfo(state = initUpdateInfo, action) {
    switch (action.type) {
        case UPDATE_INFO:
            return Object.assign({}, state, {
                title: action.title,
                content: action.content
            })

        default:
            return state
    }
}

const todoApp = combineReducers({
    data: updateData,
    show: showOrHide,
    updateInfo: updateInfo
})
export default todoApp
