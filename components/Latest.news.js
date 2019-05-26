import React from 'react';
import styled from 'styled-components';
import LatestNewsItem from './Latest.news.items';
import { ScrollView } from 'react-native-gesture-handler';
import {TouchableOpacity,View,Model,Text} from 'react-native'
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import Modal from "react-native-modal";
import Loader from './Loader';

function mapStateToProps(state){
    return {action : state.allData };
}

class  LatestNewsSection extends React.Component{
   state={
       dataFullNewsSection:[],
       loading:false,
   }
    componentDidMount(){
        // alert(this.props.action)
       
        this.setState({
            dataFullNewsSection:this.props.action,
            // loading:false,
        })
    }
    render(){
      
        return(
            <Container>
                  <Loader loading={this.state.loading}/>
            <Heading>
                Latest News
            </Heading>
            {
                this.props.action._55.map((news,index)=>(
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('detail',{'id':news.ID,'index':index})}
                        key={index} style={{flex:1}} >
                        <LatestNewsItem
                            title = {news.post_title}
                            des = {news.des}
                            image = {news.image}
                            key={index}
                            post_content={news.post_content}
                        />
                        <Separator/>
                    </TouchableOpacity>
                ))
            }
        </Container>
        )
        }
    }

export default connect(mapStateToProps)(withNavigation(LatestNewsSection));

const Heading = styled.Text `
    color:#000;
    font-size:22px;
    font-weight:500;
    margin-bottom:20px;
    margin-left:20px;
    
`;
const Container = styled.View `
    margin-top:-750px;
    ${'' /* margin-left:20px; */}
    height:100%;
    flex:1;
    z-index:1;
    width:100%
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

const NewsData = [{
    "title":"Spy app targets iPhone owners",
    "des":"Security research has discovered a powerful servellinace app first designed for android..",
    "image":"https://www.economistdubai.com/wp-content/uploads/2019/04/Kingfisher-Lodge-Sharjah-Collection-By-Mantis-Rooms-11-629x420.jpg"


},
{
    "title":"Spy app targets iPhone owners",
    "des":"Security research has discovered a powerful servellinace app first designed for android..",
    "image":"https://www.economistdubai.com/wp-content/uploads/2019/04/Kingfisher-Lodge-Sharjah-Collection-By-Mantis-Rooms-11-629x420.jpg"


},
{
    "title":"Spy app targets iPhone owners",
    "des":"Security research has discovered a powerful servellinace app first designed for android..",
    "image":"https://www.economistdubai.com/wp-content/uploads/2019/04/Kingfisher-Lodge-Sharjah-Collection-By-Mantis-Rooms-11-629x420.jpg"


},
{
    "title":"Spy app targets iPhone owners",
    "des":"Security research has discovered a powerful servellinace app first designed for android..",
    "image":"https://www.economistdubai.com/wp-content/uploads/2019/04/Kingfisher-Lodge-Sharjah-Collection-By-Mantis-Rooms-11-629x420.jpg"


},
{
    "title":"Spy app targets iPhone owners",
    "des":"Security research has discovered a powerful servellinace app first designed for android..",
    "image":"https://www.economistdubai.com/wp-content/uploads/2019/04/Kingfisher-Lodge-Sharjah-Collection-By-Mantis-Rooms-11-629x420.jpg"


},
{
    "title":"Spy app targets iPhone owners",
    "des":"Security research has discovered a powerful servellinace app first designed for android..",
    "image":"https://www.economistdubai.com/wp-content/uploads/2019/04/Kingfisher-Lodge-Sharjah-Collection-By-Mantis-Rooms-11-629x420.jpg"


},
{
    "title":"Spy app targets iPhone owners",
    "des":"Security research has discovered a powerful servellinace app first designed for android..",
    "image":"https://www.economistdubai.com/wp-content/uploads/2019/04/Kingfisher-Lodge-Sharjah-Collection-By-Mantis-Rooms-11-629x420.jpg"


},

]