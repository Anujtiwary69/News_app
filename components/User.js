import React from 'react'
import styled from 'styled-components'

class User extends React.Component{

    static navigationOptions={
        header:null
    }
    render(){
        return(
            <Text>Its working bro</Text>
        )
    }
}


export default User
 const Text = styled.Text `
    align-items:center;
    justify-content:center;
 `;