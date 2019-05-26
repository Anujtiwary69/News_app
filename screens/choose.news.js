import React from 'react';
import styled from 'styled-components';
import {Animated,Dimensions,Easing,Platform,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView} from 'react-native-gesture-handler';


const screenHeight =  Dimensions.get('window').height;


const defaultColor= "#000";
class ChooseNews extends React.Component{

    state={
        ScreenScale:new Animated.Value(screenHeight),
        color:true,
        colorSectionArray:[ "#000", "#000", "#000", "#000", "#000", "#000", "#000"]
    }
    componentDidMount(){
        Animated.spring(this.state.ScreenScale,{
            toValue:0,
            easing:Easing.bounce(),
            
        }).start();
    }
    changeColor = (index) => { 
        const colorSectionArray = [...this.state.colorSectionArray]
        if(colorSectionArray[index] == "#d21241"){
            colorSectionArray[index] = "#000"
        }else{
            colorSectionArray[index] = "#d21241"
        }
        
        
    this.setState({
        colorSectionArray:colorSectionArray
    })
    }

    render(){
        return(
            <AnimatedContainer style={{top:this.state.ScreenScale}}>
                <Border/>
                <ImageHoler>
                    <Image source={require('../assets/news_icon.jpg')} />
                </ImageHoler>
                <Header>
                    <Title>
                        Pick your interests!
                    </Title>
                    <Subtitle>
                        Let us arrange news feed for you, pick your favorite source, interest and we will personalize your feed
                    </Subtitle>
                </Header>
                <ScrollView style={{marginTop:10,maxHeight:200,width:200}}
                    // contentContainerStyle={{maxHeight:100}}
                >
                {
                    Category1.map((cat,index)=>(
                        <TouchableOpacity style={{flex:1,}}
                        onPress={() => this.changeColor(index)}
                        key={index}
                        >
                        <Content>
                            <Icon name={cat.icon} size={33} color={this.state.colorSectionArray[index]}/>
                            <Category style={{color:this.state.colorSectionArray[index]}}>{cat.title}</Category>
                        </Content>
                        </TouchableOpacity>
                       
                    ))
                }
                </ScrollView>

                <ActionContainer>
                <TouchableOpacity onPress={()=>this.props.changeScreen(2)}>
                    <ButtonContainerFinish>
                            <ButtonTextFinish>
                            Finish
                            </ButtonTextFinish>
                                
                        </ButtonContainerFinish>
                </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.changeScreen(2)}>
                    <ButtonContainerLater>
                        <ButtonTextLater>
                        Later
                        </ButtonTextLater>
                            
                    </ButtonContainerLater>
                    </TouchableOpacity>
                    
                </ActionContainer>
                
            </AnimatedContainer>
        )
    }
}

export default ChooseNews;

const Text = styled.Text `
    font-size:19px;
    color:#000;
    `;

const Container = styled.View `
    flex:1;
    background-color:#fff;
    margin-top:${(Platform.OS=="ios") ? 100 : 0}px;
    ${'' /* margin-top:100px; */}
    ${'' /* margin-top:100px; */}
    ${'' /* padding-top:${(Platform=='ios') ? "100px" : "50px"}; */}
    ${'' /* margin-top:100px; */}
    height:100%;

    
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Image=styled.Image `
    width:40%;
    height:40%;
    margin-top:${Platform=="ios" ? 0 : 50 }px;
    ${'' /* margin-top:50px; */}         
    
`; 

const Border = styled.View `
    width:60%;
    background-color:#000;
`;

const ImageHoler = styled.View `
    width:100%;
    align-items:center;
`;

const Header = styled.View `
    margin-top:-120px;
    
    margin-left:20px;
`;
const Title = styled.Text `
    font-size:22px;
    font-weight:600;
    width:40%;
    `;
const Subtitle = styled.Text `
    font-size:12px;
    width:60%
    text-align:left;
    margin-top:5px;
    ${'' /* color:'grey'; */}
`;

const Content = styled.View `
    margin-left:20px;
    flex-direction:row;
    align-items:center;
    ${'' /* justify-content:cente */}
    margin-bottom:20px;
    ${'' /* height:10% */}
    
`;
const Category = styled.Text `
    margin-left:5px;
    font-size:18px;
    color:${(state)=>(state.color) ? '#fff' : '#000'}
`;

const ButtonTextFinish = styled.Text `
    font-size:18px;
    color:#fff;
`;
const ActionContainer = styled.View `
    margin-top:30px;
    margin-left:20px;
    flex-direction:row;
`;
const ButtonContainerFinish = styled.View `
    background-color:#d21241;
    width:100px;
    align-items:center;
    height:34px;
    justify-content:center;
    border-radius:5px;
`;
const ButtonContainerLater = styled.View `
    background-color:#efefef;
    width:100px;
    align-items:center;
    height:34px;
    justify-content:center;
    border-radius:5px;
    margin-left:20px;
`;
const ButtonTextLater = styled.Text `
    font-size:18px;
    color:#bebec0;
`;

const Category1 =[{
    title:"Travel",
    icon:"ios-pin"
},
{
    title:"Business",
    icon:"ios-briefcase"
},
{
    title:"Lifestyle",
    icon:"ios-glasses"
}
,
{
    title:"Health",
    icon:"ios-medkit"
}
,
{
    title:"Technology",
    icon:"ios-laptop"
},
{
    title:"Food",
    icon:"ios-pizza"
},
{
    title:"Fashion",
    icon:"ios-shirt"
}



]