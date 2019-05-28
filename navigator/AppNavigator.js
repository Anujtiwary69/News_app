import React from 'react';
import {createMaterialTopTabNavigator,createAppContainer,createStackNavigator,withNavigationFocus} from 'react-navigation';
import Home from '../screens/home';
import {View,Text,Platform} from 'react-native';
import NewsDetails from '../screens/News.Details';
import SplashScreen from '../screens/Splash.screen';
import CommentSection from '../components/comment.section';
import LatestNews from '../components/Latest.news';
import TabNavigator from './TabNavigator';
import Category from '../components/Categroy';
import Icon from 'react-native-vector-icons/Ionicons';


// const {isFocused} = this.props.navigation;
const HomeNavigator = createStackNavigator({
    home:Home,
    detail:NewsDetails,
   
    TabNavigator:TabNavigator

},{
    initialRouteName:"TabNavigator",
    // mode:"modal"
});
HomeNavigator.navigationOptions=({navigation})=>{
    var tabBarVisible = true;
    const routeName =  navigation.state.routes[navigation.state.index].routeName;
    if(routeName=='detail'){
        tabBarVisible=false;
    }
    return{
        tabBarVisible,
        tabBarLabel:({focused})=>(
            focused ?
            <View style={{flexDirection:'row',backgroundColor:'#ac2446',width:55,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:(Platform=="ios"? 20 : 50)}}>
                <Icon name="ios-home" size={16} color="#fff"/>
                <Text  style={{color:'#fff',marginLeft:3 ,fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
                    Now
                </Text>
            </View>
            :
            <View style={{flexDirection:'row',width:55,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:20}}>
                <Icon name="ios-home" size={16} color="#fff"/>
                <Text  style={{marginLeft:3,color:'#fff',fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
                    Now
                </Text>
            </View>
    
    
        ),
        activeTintColor:"#fff",
        tabBarOptions:{
            scrollEnabled:true,
            style:{
                backgroundColor: '#d21241',
                // height:42,
                paddingTop:-10,
                marginBottom: -90,
               
            },
            tabStyle:{
                // backgroundColor: '#ac2446',
                marginLeft: 10,
                borderRadius: 40,
                width:65,
                height:40
                
                
            },
            labelStyle:{
                fontSize: 12,
                fontWeight:(Platform=="ios") ? 600 : 'bold',
                marginLeft: -10,
                // paddingTop: -30,
    
            },
            indicatorStyle:{
                height:0,
            }
            
        }
    }
    
}


const TravelNavigator = createStackNavigator({
    travel:Category,
    
    // TabNavigator:TabNavigator
});
const FashionNavigator = createStackNavigator({
    fashion:Category
});
const LifestyleNavigator = createStackNavigator({
    lifestyle:Category
});
const BusinessNavigator = createStackNavigator({
    business:Category
});
const FinanceNavigator = createStackNavigator({
    finance:Category
});
const HealthNavigator = createStackNavigator({
    Wellness:Category
});
const TechnologyNavigator = createStackNavigator({
    Technology:Category
});
TravelNavigator.navigationOptions=({
    tabBarLabel:({focused})=>(
        focused ?
        <View style={{backgroundColor:'#ac2446',width:55,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:(Platform=="ios"? 20 : 50)}}>
            <Text  style={{color:'#fff',fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
                Travel
            </Text>
        </View>
        :
        <View style={{width:55,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:20}}>
            <Text  style={{color:'#fff',fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
                Travel
            </Text>
        </View>


    ),
    activeTintColor:"#fff",
    tabBarOptions:{
        scrollEnabled:true,
        style:{
            backgroundColor: '#d21241',
            height:42,
            marginBottom: -90,
            
        },
        tabStyle:{
            // backgroundColor: '#ac2446',
            marginLeft: 10,
            borderRadius: 40,
            width:65,
            height:40
            
            
        },
        labelStyle:{
            fontSize: 12,
            fontWeight:(Platform=="ios") ? 600 : 'bold',
            marginLeft: -10,
            // paddingTop: -30,

        },
        indicatorStyle:{
            height:0,
        }
        
    }
})
FashionNavigator.navigationOptions=({
    tabBarLabel:({focused})=>(
        focused ?
        <View style={{backgroundColor:'#ac2446',width:80,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:(Platform=="ios"? 20 : 50)}}>
            <Text  style={{color:'#fff',fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
                Fashion
            </Text>
        </View>
        :
        <View style={{width:55,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:20}}>
            <Text  style={{color:'#fff',fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
                Fashion
            </Text>
        </View>


    ),
    activeTintColor:"#fff",
    
    tabBarOptions:{
        scrollEnabled:true,
        style:{
            backgroundColor: '#d21241',
            height:42,
            marginBottom: -90,
            
        },
        tabStyle:{
            // backgroundColor: '#ac2446',
            marginLeft: 10,
            borderRadius: 40,
            width:65,
            height:40
            
            
        },
        labelStyle:{
            fontSize: 12,
            fontWeight:(Platform=="ios") ? 600 : 'bold',
            marginLeft: -10,
            // paddingTop: -30,

        },
        indicatorStyle:{
            height:0,
        }
        
    }
})
LifestyleNavigator.navigationOptions=({
    tabBarLabel:({focused})=>(
        focused ?
        <View style={{backgroundColor:'#ac2446',width:80,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:(Platform=="ios"? 20 : 40)}}>
            <Text  style={{color:'#fff',fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
                Lifestyle
            </Text>
        </View>
        :
        <View style={{width:55,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:20}}>
            <Text  style={{color:'#fff',fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
            Lifestyle
            </Text>
        </View>


    ),
    activeTintColor:"#fff",
    
    tabBarOptions:{
        scrollEnabled:true,
        style:{
            backgroundColor: '#d21241',
            height:42,
            marginBottom: -90,
            
        },
        tabStyle:{
            // backgroundColor: '#ac2446',
            marginLeft: 10,
            borderRadius: 40,
            width:65,
            height:40
            
            
        },
        labelStyle:{
            fontSize: 12,
            fontWeight:(Platform=="ios") ? 600 : 'bold',
            marginLeft: -10,
            // paddingTop: -30,

        },
        indicatorStyle:{
            height:0,
        }
        
    }
})
TechnologyNavigator.navigationOptions=({
    tabBarLabel:({focused})=>(
        focused ?
        <View style={{backgroundColor:'#ac2446',width:55,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:(Platform=="ios"? 20 : 50)}}>
            
            <Text  style={{color:'#fff',fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
                Tech
            </Text>
        </View>
        :
        <View style={{width:55,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:20}}>
            <Text  style={{color:'#fff',fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
            Tech
            </Text>
        </View>


    ),
    activeTintColor:"#fff",
    
    tabBarOptions:{
        scrollEnabled:true,
        style:{
            backgroundColor: '#d21241',
            height:42,
            marginBottom: -90,
            
        },
        tabStyle:{
            // backgroundColor: '#ac2446',
            marginLeft: 10,
            borderRadius: 40,
            width:65,
            height:40
            
            
        },
        labelStyle:{
            fontSize: 12,
            fontWeight:(Platform=="ios") ? 600 : 'bold',
            marginLeft: -10,
            // paddingTop: -30,

        },
        indicatorStyle:{
            height:0,
        }
        
    }
})
HealthNavigator.navigationOptions=({
    tabBarLabel:({focused})=>(
        focused ?
        <View style={{backgroundColor:'#ac2446',width:55,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:(Platform=="ios"? 20 : 50)}}>
            <Text  style={{color:'#fff',fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
                Health
            </Text>
        </View>
        :
        <View style={{width:55,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:20}}>
            <Text  style={{color:'#fff',fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
                Health
            </Text>
        </View>


    ),
    activeTintColor:"#fff",
    
    
    tabBarOptions:{
        scrollEnabled:true,
        style:{
            backgroundColor: '#d21241',
            height:42,
            marginBottom: -90,
            
        },
        tabStyle:{
            // backgroundColor: '#ac2446',
            marginLeft: 10,
            borderRadius: 40,
            width:65,
            height:40
            
            
        },
        labelStyle:{
            fontSize: 12,
            fontWeight:(Platform=="ios") ? 600 : 'bold',
            marginLeft: -10,
            // paddingTop: -30,

        },
        indicatorStyle:{
            height:0,
        }
        
    }
})
BusinessNavigator.navigationOptions=({
    tabBarLabel:({focused})=>(
        focused ?
        <View style={{backgroundColor:'#ac2446',width:70,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:(Platform=="ios"? 20 : 50)}}>
            <Text  style={{color:'#fff',fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
                Business
            </Text>
        </View>
        :
        <View style={{width:70,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:20}}>
            <Text  style={{color:'#fff',fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
                Business
            </Text>
        </View>


    ),
    activeTintColor:"#fff",
    
    tabBarOptions:{
        scrollEnabled:true,
        style:{
            backgroundColor: '#d21241',
            height:42,
            marginBottom: -90,
            
        },
        tabStyle:{
            // backgroundColor: '#ac2446',
            marginLeft: 10,
            borderRadius: 40,
            width:65,
            height:40
            
            
        },
        labelStyle:{
            fontSize: 12,
            fontWeight:(Platform=="ios") ? 600 : 'bold',
            marginLeft: -10,
            // paddingTop: -30,

        },
        indicatorStyle:{
            height:0,
        }
        
    }
})
FinanceNavigator.navigationOptions=({
    tabBarLabel:({focused})=>(
        focused ?
        <View style={{backgroundColor:'#ac2446',width:55,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:(Platform=="ios"? 20 : 50)}}>
            <Text  style={{color:'#fff',fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
                Finance
            </Text>
        </View>
        :
        <View style={{width:55,height:30,alignContent:"center",alignItems:"center",justifyContent:"center",borderRadius:20}}>
            <Text  style={{color:'#fff',fontWeight:(Platform=="ios") ? 800 : 'bold',fontSize:12}}>
                Finance
            </Text>
        </View>


    ),
    activeTintColor:"#fff",
    
    tabBarOptions:{
        scrollEnabled:true,
        style:{
            backgroundColor: '#d21241',
            height:42,
            marginBottom: -90,
            
        },
        tabStyle:{
            // backgroundColor: '#ac2446',
            marginLeft: 10,
            borderRadius: 40,
            width:65,
            height:40
            
            
        },
        labelStyle:{
            fontSize: 12,
            fontWeight:(Platform=="ios") ? 600 : 'bold',
            marginLeft: -10,
            // paddingTop: -30,

        },
        indicatorStyle:{
            height:0,
        }
        
    }
})



const AppContainer = createMaterialTopTabNavigator({
    HomeNavigator,LifestyleNavigator,TechnologyNavigator,TravelNavigator,HealthNavigator,BusinessNavigator, FashionNavigator
})

export default createAppContainer(AppContainer);