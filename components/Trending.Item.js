import React, { Component } from 'react';
import styled from 'styled-components';

import TrendingImage from './TrendingImage';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from 'react-redux'
import {withNavigation} from 'react-navigation';



function mapStateToProps(state){
    return {action:state.featureData};
}

class  TrendingItem extends React.Component{
    ChangeTheScreen = (news,index) =>{
        this.props.navigation.navigate('detail',{'id':news,'index':index})
    }
    render(){
        return(
            <Container>
                <Title>
                    Trending
                </Title>
                <Subtitle>
                    View All
                </Subtitle>
                <ScrollView horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                style={{width:"100%",maxHeight:'100%'}}>
                    {
                        this.props.action._55.map((feature,index)=>(
                                    <TrendingImage
                                        title={feature.post_title}
                                        image={feature.image}
                                        key={index}
                                        id={feature.ID}
                                        index={index}
                                        ChangeTheScreen={this.ChangeTheScreen}
                                    />
                           
                        ))
                    }
                    
                    
                </ScrollView>
            
            </Container>
        )
    }
}


export default connect(mapStateToProps)(withNavigation(TrendingItem));

const Container = styled.View `
    ${'' /* padding:20px; */}
    padding-top:20px;
    padding-left:20px;
    padding-bottom:20px;
`;
const Title = styled.Text `
    font-size:18;
    ${'' /* font-weight:600; */}
    ${'' /* margin:20px; */}
    color:#0f1119;
    
`;

const Subtitle = styled.Text `
 position:absolute;
 right:5;
 top:21;
 color:#0085eb;
 font-weight:600;
 font-size:16;
`;