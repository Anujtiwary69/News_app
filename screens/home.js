import React, { Component } from 'react';
import {Text,Animated,Easing} from 'react-native';
import styled from 'styled-components';
import TrendingItem from '../components/Trending.Item';
import LatestNewsSection from '../components//Latest.news';
import {ScrollView,SafeAreaView,Alert,Modal,View,TouchableHighlight} from 'react-native';
import SplashScreen from './Splash.screen';
import CommentSection from '../components/comment.section';
import api from '../function/api';
import {connect} from 'react-redux';    
// import console = require('console');
import ModalTester from './Model.Tester';


function mapStateToProps(state){
  return {action : state.allData,featureData:state.featureData };
}

function mapDispatchToProps(dispatch){
  return{
      closeMenu:() => 
      dispatch({
          type: 'CLOSE_MENU',
          
      })
  };
}



class Home extends Component {
  state={
    SplashScreen:true,
    modalVisible: false,
  }

  static navigationOptions={
    header:null,
    tabBarVisible:false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  componentDidMount(){
    // this.props.closeMenu();
    // alert(this.props.featureData)
  }
  componentDidUpdate(){
    
  }
  render() {
    console.log(this.props.featureData);
    return (

        <ScrollView bounces={true} bouncesZoom={true} showsVerticalScrollIndicator={false}>
        <AnimatedContainer >
        {/* <Text>sdsdsdd</Text> */}
            <TrendingItem/>
            <LatestNewsSection />
        </AnimatedContainer>
      </ScrollView>
      )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);

const Container = styled.View `
  flex:1;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const SplashScreenContainer = styled.View `
  z-index:1;
  flex:1;
  width:100%;
  height:100%;
`;

// const Text = styled.Text `
  
// `;