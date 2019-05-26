import React from 'react';
import {createMaterialTopTabNavigator,createAppContainer,createStackNavigator,withNavigationFocus,createBottomTabNavigator} from 'react-navigation';
import Home from '../screens/home';
import {View,Text,Platform} from 'react-native';
import NewsDetails from '../screens/News.Details';
import SplashScreen from '../screens/Splash.screen';
import CommentSection from '../components/comment.section';
import LatestNews from '../components/Latest.news';
import Icon from 'react-native-vector-icons/Ionicons'
import User from '../components/User';

 const HomeNavigator = createStackNavigator({

    home:Home,
    SplashScreen:SplashScreen,
    comment:CommentSection,
    LatestNewsPage:LatestNews,
    

},{
    // initialRouteName:"home"
});

const MenuNavigator = createStackNavigator({
    User:User,
})
const PlayNavigator = createStackNavigator({
    User:User,
})
const UserNavigator = createStackNavigator({
    User:User,
})

HomeNavigator.navigationOptions=({
    
    tabBarIcon:({focused})=>(
       (focused) ? <Icon name="ios-browsers" size={28} color="#d21241"/> :
       <Icon name="ios-browsers" size={28} />
            
    ),
    tabBarOptions:{
        showLabel:false,
    }
})
MenuNavigator.navigationOptions=({
    tabBarIcon:({focused})=>(
        (focused) ? <Icon name="ios-menu" size={28} color="#d21241"/> :
        <Icon name="ios-menu" size={28} />
             
     ),
    tabBarOptions:{
        showLabel:false,
    }
})
PlayNavigator.navigationOptions=({
    tabBarIcon:({focused})=>(
        (focused) ? <Icon name="ios-play" size={28} color="#d21241"/> :
        <Icon name="ios-play" size={28} />
             
     ),
   
    tabBarOptions:{
        showLabel:false,
    }
})
UserNavigator.navigationOptions=({
    tabBarIcon:({focused})=>(
        (focused) ? <Icon name="ios-contact" size={28} color="#d21241"/> :
        <Icon name="ios-contact" size={28} />
             
     ),
    //  tabBarVisible:false,
    tabBarOptions:{
        showLabel:false,
    }
})
const SecondPageNavigator = createStackNavigator({
    home:Home,
})


TabNavigator = createBottomTabNavigator({
    HomeNavigator,MenuNavigator,PlayNavigator,UserNavigator
})


export default createAppContainer(TabNavigator);