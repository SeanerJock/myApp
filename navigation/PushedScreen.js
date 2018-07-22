import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    ToastAndroid
} from 'react-native'
export default class PushedScreen extends Component {
    constructor(props) {
        super(props)
        ToastAndroid.show(this.props.info, ToastAndroid.SHORT)
        // this.props.navigator.toggleTabs({
        //     to: 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
        //     animated: true // does the toggle have transition animation or does it happen immediately (optional)
        //   });
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    }
    static navigatorStyle = {
        navBarHideOnScroll: false,
        navBarBackgroundColor: '#4dbce9', // This will be the TitleBars color when the react view is hidden and collapsed
        collapsingToolBarComponent: 'navigation.SecondTabScreen',
        navBarTranslucent: true, // Optional, sets a translucent dark background to the TitleBar. Useful when displaying bright colored header to emphasize the title and buttons in the TitleBar
        showTitleWhenExpended: false, // default: true. Show the screens title only when the toolbar is collapsed
        collapsingToolBarCollapsedColor: 'green', // optional. The TitleBar (navBar) color in collapsed state
        collapsingToolBarExpendedColor: 'red' // optional. The TitleBar (navBar) color in expended state
      };
    onNavigatorEvent(event) {
         //ToastAndroid.show(event.type,ToastAndroid.SHORT)
         if(event.type==='DeepLink'){
             ToastAndroid.show(event.payload,ToastAndroid.SHORT)
         }
        // if (event.id === 'bottomTabSelected') {
        //     console.log('Tab selected!');
        // }
        // if (event.id === 'bottomTabReselected') {
        //     console.log('Tab reselected!');
        // }
    }
    render() {
        return (
            <View>
                <Text>我的PushedScreen{this.props.info}页面</Text>
                <Button onPress={() => {
                    // this.props.navigator.resetTo({
                    //     screen: 'navigation.SecondTabScreen',
                    //     title: 'second title',
                    //     animated: true,
                    //     animationType: 'slide-horizontal'
                    // })
                    this.props.navigator.showSnackbar({
                        text: '我是一个很帅的人',
                        //actionText: 'done', // optional
                        //actionId: 'navigation.SecondTabScreen', // Mandatory if you've set actionText
                        actionColor: 'green', // optional
                        textColor: 'red', // optional
                        backgroundColor: 'blue', // optional
                        duration: 'short' // default is `short`. Available options: short, long, indefinite
                      });

                    // this.props.navigator.handleDeepLink({
                    //     link: "chats/2349823023", // the link string (required)
                    //     payload: 'payload'
                    // });
                    // this.props.navigator.push({
                    //     screen: 'navigation.FirstTabScreen',
                    //     title: 'first'
                    //   })
                }} title="弹出通知" />
            </View>
        )
    }
}