import React, { Component } from 'react';
import {Text,Animated,Easing} from 'react-native';
import styled from 'styled-components';
import TrendingItem from './Trending.Item';
import LatestNewsSection from './Latest.news';
import {ScrollView} from 'react-native';
import SplashScreen from './screens/Splash.screen';

class Home extends Component {
  state={
    
  }
  static navigationOptions={
    header:null,
  }
  componentDidMount(){
    
  }
  render() {
    return (
      <ScrollView bounces={true} bouncesZoom={true} showsVerticalScrollIndicator={false}>
        <SplashScreenContainer>
              <SplashScreen/>
          </SplashScreenContainer>
        <AnimatedContainer >
            <TrendingItem/>
            <LatestNewsSection/>
        </AnimatedContainer>
      </ScrollView>
    )
  }
}

export default Home;

const Container = styled.View `
  flex:1;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const SplashScreenContainer = styled.View `
z-index:1;
flex:1;
`;
