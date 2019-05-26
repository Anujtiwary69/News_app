import React from 'react';
import styled from 'styled-components'

class  CommentSection  extends React.Component {
    static navigationOptions={
        header:null,
    }
    render(){
        return(
            <Container>
                <Text>Its working</Text>
            </Container>
        )
    }
}
    


export default CommentSection;

const Container = styled.View `
   position:absolute;
    background:black;
    width:100%;
    height:100%;
    z-index:100;
    border-radius:10px;
    overflow:hidden;
    
`
const Text = styled.Text ``