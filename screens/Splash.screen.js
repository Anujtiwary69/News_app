import React from 'react';
import styled from 'styled-components';

import {Animated,Easing,ActivityIndicator,SafeAreaView,StatusBar,ScrollView} from 'react-native';
import AppNavigator from '../navigator/AppNavigator';

class SplashScreen extends React.Component{

    static navigationOptions={
       header:null,
       tabBarVisible:false,
       changefulScreen:false,
       
    }
    state={
        logoScale: new Animated.Value(0),
        hideLoader:true,
        animating:false,
        screenContainer: new Animated.Value(1),
        ScreenOpacity:new Animated.Value(1),
        homeScreen:true,
        opacity:1,
       
    }
    componentDidMount(){
        Animated.spring(this.state.logoScale,{
            toValue:1,
            easing:Easing.circle(),
        }).start(() =>
        {
            this.setState({
                // opacity:1,
                // hideLoader:false,
            })
        }
        )
      
        setTimeout(() => {

            Animated.timing(this.state.screenContainer,{
                toValue:1,
                easing:Easing.in(),
                duration:2000,
            }).start(()=>{
                this.setState({
                    opacity:0,
                })
                Animated.timing(this.state.screenContainer,{
                    toValue:10,
                    easing:Easing.in(),
                    duration:2000,
                }).start(()=>{
                  
                });
                Animated.timing(this.state.ScreenOpacity,{
                    toValue:0,
                    easing:Easing.in(),
                    duration:1000,
                }).start(()=>{
                    this.setState({
                        homeScreen:true
                    });
                    this.props.changeScreen();
                });
                
                
            });
            
          }, 1000);
          this.setState({
              changefulScreen:true,
          })

       
    }

    // componentDidUpdate(){
    //     alert(1)
    // }

    render(){
        return(
           
                <AnimatedContainer style={{transform:[{scale:this.state.screenContainer}],opacity:this.state.ScreenOpacity}}>
                <LogoHolder>
                        <AnimatedLogo 
                        style={{transform:[{scale:this.state.logoScale}]}} source={require('../assets/logo.png')} />
                        <ActivityIndicator  color="#d21241" style={{opacity:this.state.opacity}}
                        // animating={this.state.animating}
                        size="large"
                        />
                </LogoHolder>
            </AnimatedContainer>
           

             
        )
    }
}

export default SplashScreen;

const Container = styled.View `
    flex:1;
    align-items:center;
    justify-content:center;
    width:100%
`;
const LogoHolder = styled.View ``;
const Logo = styled.Image `
    
`;

const AnimatedLogo = Animated.createAnimatedComponent(Logo);
const AnimatedContainer = Animated.createAnimatedComponent(Container);

