import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/AntDesign'
import { Dropdown } from 'react-native-material-dropdown';
import {withNavigation} from 'react-navigation'
import HTML from 'react-native-render-html';
import {Dimensions} from 'react-native'
let data = [{
    value: 'Banana',
  }, {
    value: 'Mango',
  }, {
    value: 'Pear',
  }];
const LatestNewsItem = props =>(
    <Content>
        <Section>
            <TitleContainer>
                <Title>{props.title.substr(0,40)}...</Title>
                <Description>
                    <HTML html= {props.post_content.substr(0,100)} />
                </Description>
            </TitleContainer>
            <ActionContainer>
                    <Button>
                        <ButtonText>
                            Open
                        </ButtonText>
                        
                    </Button>
                    
                    <IconHolderComment>
                        <Icon name="ios-chatboxes" size={18}/>
                        <CommentText>Comment</CommentText>
                    </IconHolderComment>
                    <IconHolderMoreOption>
                        <AntIcon name="ellipsis1" size={21} />
                    </IconHolderMoreOption>
                    
            </ActionContainer>
        </Section>
        <ImageContainer>
        <Date>
            <Icon name="ios-timer" color="#fff" style={{marginLeft:-5}}/>
            <Text>1 hr</Text>
        </Date>
        <Image 
        source={{uri:props.image,cache: 'force-cache',}}
        defaultSource={require('../assets/ImageHolder.jpg')}
        />
        <AutherContainer>
            <Icon name="ios-contact" size={18}/>
            <Auther>
                ED Report
            </Auther>
        </AutherContainer>
    </ImageContainer>
    
   
    </Content>
)

export default LatestNewsItem;
const Section = styled.View `
    width:100%;
    ${'' /* flex-direction:row; */}
`;
const TitleContainer = styled.View `
    width:70%;
`;
const Title = styled.Text `
    font-size:20px;
    margin-bottom:5px;
`;
const Description = styled.View `
    width:100%;
    margin-top:-10px;
`;
const ImageContainer = styled.View `
    width:30%;
    position:absolute;
    right:0px;
    box-shadow:5px 5px 5px rgba(0,0,0,0.25);
`;
const Image = styled.Image `
    width:100px;
    height:100px;
    border-radius:5px;
`;

const Content = styled.View `
    flex:1;
    ${'' /* flex-direction:row; */}
    ${'' /* width:100%; */}
    margin-left:20px;
`;

const Date = styled.View `
    flex-direction:row;
    position:absolute;
    right:23;
    top:5;
    z-index:1;
    bac
`;
const Text = styled.Text `

    color:#fff;
    font-size:10px;
    font-weight:600;
    margin-left:3px;


`;
const ActionContainer = styled.View `
    flex-direction:row;
    margin-top:10px;
`;
const Button = styled.View `
    background:#0074eb;
    background-color:#d21241;
    width:55px;
    height:25px;
    align-items:center;
    justify-content:center;
    border-radius:20px;
`;
const CommentText = styled.Text `
    font-size:12px;  
    margin-left:5px;      
`;
const IconHolderComment = styled.View `
    flex-direction:row;
    margin-left:20px;
    align-items:center;
    justify-content:center;
`;
const IconHolderMoreOption = styled.View `
    align-items:center;
    justify-content:center;
    margin-left:20px;
`;
const ButtonText = styled.Text `
    color:#fff;
    font-weight:600;
    font-size:12PX;
`;

const AutherContainer = styled.View `
    flex-direction:row;
    margin-top:15px;
    align-items:center;
    justify-content:center;
    margin-left:-25px;
`;
const Auther = styled.Text `
    font-size:12px;
    margin-left:5px;
`;
