import React, { Component,Fragment } from 'react'
import AppNavigator from './navigator/AppNavigator';
import Home from './screens/home';
// import TabNavigator from './navigator/'
// import {  } from 'react-navigation';
import {SafeAreaView,StatusBar,Animated} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import SplashScreen from './screens/Splash.screen';
import styled from 'styled-components';
import ChooseNews from './screens/choose.news';
// import console = require('console');
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import api from './function/api';
import TabNavigator from './navigator/TabNavigator'
import Loader from './components/Loader';
const initialState = {
  action:"",
  name:"",
  featureData:api.getFeaturedData(),
  text:"",
  allData:GettheData()
}

const reducer =(state = initialState,action) =>{

  switch (action.type){
    case "SAVE_NEWS": 
      return {bookmark:action.text,state};
    case "OPEN_MENU":
       return {action:"openMenu"};
    case "UPDATE_NAME":
        return {name:action.name}
    default:
      return state;
  }
}
const store = createStore(reducer);

function GettheData(){
  const data =  api.getDataFromApiAsync();
  return data;
}

class App extends Component {
  state={
    SplashScreen:true,
    chooseYourCategory:true,
    loading:false,
    
  }
  changeScreen=(i)=>{
    // alert(1);
    if(i==2){
      this.setState({
        chooseYourCategory:false,
        loading:true,
      })
    }
    this.setState({
      SplashScreen:false,
    })
  }
  componentDidMount(){
    const data =  api.getDataFromApiAsync();
    this.setState({
      // chooseYourCategory:false,
      loading:false,
    })
  }

  render() {
    // console.log(this.props.navigation);
    return (
      
        (this.state.SplashScreen) ? (
        <SplashScreen changeScreen={this.changeScreen}/>
        )
        :
          
            (this.state.chooseYourCategory) ? (
                <ChooseNews changeScreen={this.changeScreen}/>
            ) :(
              <Provider store={store}>
              
                  <Fragment>
                    <SafeAreaView 
                        style={{flex:0,backgroundColor:"#d21241"}}
                    />
                    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff',marginBottom:-50 }}>
                      <StatusBar barStyle="light-content"/>
                      <ContainerHome>
                      {/* <Loader loading={this.state.loading}/> */}
                        <AppNavigator/>
                        {/* <TabNavigator/> */}
                      </ContainerHome>
                    
                    </SafeAreaView>
                  </Fragment>
              </Provider>
              
            )
           
          

      
         
          
          
      
      
      
    )
  }
}

export default App;

const ContainerHome = styled.View `
    flex:1;
    padding-top:-200px;
`;

const AnimatedContainerHome = Animated.createAnimatedComponent(ContainerHome);

