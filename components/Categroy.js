import React from 'react';
import styled from 'styled-components';
import LatestNews from './Latest.news';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import api from '../function/api';
import Icon from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/AntDesign'
// import console = require('console');


class Category extends React.Component{
    state = {
        dataObject:[],
    }
    async componentDidMount(){
        const name = this.props.navigation.state.routeName;
        const data = await api.getDataByCategory(name)
        // alert(data);
       
        this.setState({
            dataObject:data
        });
        // console.log(this.state.dataObject);
    }
    render(){
        return(
            <ScrollView
                style={{flex:1,marginTop:10,}}
                >
                  <Heading>
                            {this.props.navigation.state.routeName.charAt(0).toUpperCase() + this.props.navigation.state.routeName.slice(1)}
                </Heading>
                 <FlatList
                    data={this.state.dataObject}
                    style={{width:"100%",height:"100%",marginTop:50}}
                    renderItem={({ item }) => (
                        // <Container>
                      
                             <Content>
                            <Section>
                                <TitleContainer>
                                    <Title>{item.post_title.substr(0,40)}...</Title>
                                    <Description>
                                        Security research has discovered a powerful servellinace 
                                        app first designed for android..
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
                                    source={{uri:item.image,cache: 'force-cache',}}
                                    defaultSource={require('../assets/ImageHolder.jpg')}
                                    />
                                    <AutherContainer>
                                        <Icon name="ios-contact" size={18}/>
                                        <Auther>
                                            ED Report
                                        </Auther>
                                    </AutherContainer>
                                </ImageContainer>
                                <Separator/>
                        </Content>
                        
                        // </Container>
                       
                    )} 
                />
            </ScrollView>
               
            )
        }
    }
    
    export default Category;

    const Container = styled.View `
        ${'' /* margin-top:10px; */}

    `;
    const Heading = styled.Text `
        font-size:16px;
        font-weight:400;
        margin-left:20px;
        color:#d21241;
        margin-bottom:-40px;
        ${'' /* margin-bottom:40px; */}
    `;
    const Section = styled.View `
        width:100%;
        ${'' /* flex-direction:row; */}
    `;
    const TitleContainer = styled.View `
    ${'' /* margin-top:30px; */}
        width:70%;
    `;
    const Title = styled.Text `
        font-size:20px;
        margin-bottom:5px;
    `;
    const Description = styled.Text ``;
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
        ${'' /* flex:1; */}
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
    const Separator = styled.View `
    ${'' /* width:10%; */}
    background-color:#cfcfd7;
    height:10px;
    margin-left:-500px;
    margin-bottom:20px;
    margin-top:10px;
    width:1100%;
    z-index:1;
`;
    