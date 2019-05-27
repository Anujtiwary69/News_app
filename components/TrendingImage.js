import React from 'react';
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons';  
import {TouchableOpacity} from 'react-native'


const TrendingImage = props =>(
    
    <ImageContainer>
   
    <Image
     source={{uri:props.image}}
     defaultSource={require('../assets/ImageHolder.jpg')}
     imageStyle={{ borderRadius: 10}}
     >
     <TouchableOpacity style={{flex:1}} onPress={()=>props.ChangeTheScreen(props.id,props.index)}>
        <CaptionContainer>
            
            <Caption>
                {props.title}
            </Caption>
        
            <Date>
                <Icon name="ios-timer" style={{color:'#fff'}} size={16}/>
                <Text>1 hr</Text>
            </Date>
            <BackgroundHolder>

        </BackgroundHolder>
    </CaptionContainer>
    </TouchableOpacity>
    </Image>
     
 </ImageContainer>
);

export default TrendingImage;

const ImageContainer = styled.View `
    margin-top:10px;
    ${'' /* width:100%; */}
    box-shadow:5px 5px 5px rgba(0,0,0,0.25);
    flex:1;
    padding-bottom:0px;
    margin-right:-80px;

`;
const Image = styled.ImageBackground `
    width:70%;
    height:18%;
    border-radius:1px;
`;
const CaptionContainer = styled.View `
    ${'' /* z-index:1; */}
    ${'' /* border-radius:10px; */}
    width:100%;
    height:30%;
    flex-direction:row;
    margin-top:110px;
    backgroundColor: rgba(52, 52, 52, 0.5);
    align-items:center;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    ${'' /* opacity:0.5 */}

`;
const Caption = styled.Text `
    color:#fff;
    font-weight:800;
    width:80%;
    margin-left:15px;
    z-index:1;
    opacity:5;
    
    ${'' /* margin:5px; */}

`;
const Date = styled.View `
    width:20%;
    flex-direction:row;
    margin-top:18px;
    margin-left:-10px;
`;

const Text = styled.Text `
    font-size:11px;;
    color:#fff;
    margin-left:5px;
    margin-right:5px;

`;

const BackgroundHolder = styled.View `
`;
