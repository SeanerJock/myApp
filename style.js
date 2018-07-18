import { StyleSheet } from 'react-native'
export const style = StyleSheet.create({
    /**
     * 容器样式
     */
    container: {
        flex: 1,
        backgroundColor: '#128765',
        justifyContent: 'flex-end'
    },
    bottomContainer: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between'

    },
    bottomItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#987643'
    },
    bottomItemFont: {
        fontSize: 18
    }
})