import React, {Component} from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity,View,ScrollView,Dimensions,Share} from 'react-native'
// import { tsNonNullExpression } from '@babel/types';
import {connect} from 'react-redux';
// import console = require('console');
import api from '../function/api';
// import { ScrollView } from 'react-native-gesture-handler';
// import console = require('console');
import HTML from 'react-native-render-html';
import Loader from '../components/Loader';



function mapStateToProps(state){
    return {action:state.featureData,bookmark:state.bookmark};
}

function mapDispatchToProps(dispatch){
    return{
        bookMark:() => 
        dispatch({
            type: 'SAVE_NEWS',
            text:"Its working"
            // id:,

        })
    }
}
class NewsDetails extends Component{
    state={
        NewsdetailData:[],
        loading:false,
    }
    static navigationOptions={
        header:null,
        
      }
    async componentDidMount(){
        // alert(this.props.bookmark);
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        // alert(id);
        this.setState({
            loading:true,
        })
        const index = navigation.getParam('index');
       const data  = await api.getDataFromApiByIdAsync(id);
        this.setState({
            NewsdetailData:data,
            loading:false,
        })
    }

    onShare = async (id) => {
        const apiHost = 'http://beta.economistdubai.com';
        const urlApp = "https://economistdubai.com";
        response =   await fetch(apiHost + '/api/index.php/Welcome/getUrlForPost?id='+id+'&rand='+Math.random()).
        then(res => res.text()).then(text => {
            this.setState({
                // loading:false,
                url:text,
            });
            
        });  
            
            try {
                const result =   Share.share({
                    message:
                    urlApp+this.state.url,
                });

            
                if (result.action === Share.sharedAction) {
                    if (result.activityType) {
                    // shared with activity type of result.activityType
                    } else {
                    // shared
                    }
                } else if (result.action === Share.dismissedAction) {
                    // dismissed
                }
                } catch (error) {
                    
                }
       
      };
      bookmarkNews = (id) =>{
        this.props.bookMark();
      }

    render(){
        // console.log(this.state.NewsdetailData);
        return(
            
               this.state.NewsdetailData.map((news,index)=>(
               
                <Container>
                <Loader loading={this.state.loading}/>
                <Header>
                 <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={{flex:1,flexDirection:'row'}}>
                         <Icon name="ios-arrow-back" size={24} color="#fff"/>
                         <Text>Back</Text>
                 </TouchableOpacity>
                    
                     <Right>
                        <TouchableOpacity onPress={()=>this.bookmarkNews(news.ID)}>
                            <Icon1 name="bookmark-border" size={24} color="#fff" style={{marginRight:20}}/>
                        </TouchableOpacity>
                         <TouchableOpacity onPress={()=>this.onShare(news.ID)}>
                            <Icon name="ios-share" size={24} color="#fff"/>
                         </TouchableOpacity>
                         
                     </Right>
                </Header>
                <ScrollView>
                <ImageHolder>
                    <Image
                    // source={{uri:props.image,cache: 'force-cache',}}
                    source={{uri:news.image}}
                        defaultSource={require('../assets/ImageHolder.jpg')}
                    />
                </ImageHolder>
                <Content>
                    <TitleHeader>
                        <Title>
                             {news.post_title}
                        </Title>
                        <Subtitle>
                            <Time>
                                 <Icon name="ios-timer"/>
                                 <TimeDetail> 9 hr |</TimeDetail>
                            </Time>
                            <Category>
                                 Travel
                            </Category>
                        </Subtitle>
                    </TitleHeader>
                    
                        <Description>
                            {/* <ContentDescription> */}
                            <HTML html={news.post_content} imagesMaxWidth={Dimensions.get('window').width} />
                                
                            {/* </ContentDescription> */}
                        </Description>
                   
                </Content>
                </ScrollView>
             </Container>
             
               ))
           
           
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsDetails);

const Container = styled.View `
    

`;
const Header = styled.View `
    height:40px;
    width:100%;
    padding-left:20px;
    flex-direction:row;
    align-items:center;
    background-color:#d21241;
`;
const Text = styled.Text `
    font-size:18px;
    color:#fff;
    margin-left:5px;

`;

const Right = styled.View `
    flex-direction:row;
    position:absolute;
    right:40
`;

const ImageHolder = styled.View `
    width:100%;
`;
const Image = styled.Image `
    width:100%;
    height:200px;
`;

const TitleHeader = styled.View `
    margin:20px;
`;
const Content = styled.View ``;
const Title = styled.Text `
    font-size:18px;
    font-weight:600
`;
const Category = styled.Text `
    margin-left:4px;
    font-size:12px;
    color:#d21241;
    font-weight:400;
`;
const Subtitle = styled.View `
    flex-direction:row;
    align-items:center;
    margin-top:5px;
    
`;
const Time = styled.View `
    flex-direction:row;
`;
const TimeDetail = styled.Text `
    font-size:12px;
`;

const Description = styled.View `
margin-left:20px;
margin-right:20px;
`;
const ContentDescription = styled.Text ``;