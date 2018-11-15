import React, { Component } from 'react';
import { View, Text } from 'react-native';
export default class Header extends Component {

    render() {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:30}}>Top Menu</Text>


            </View> 
        )
    }
}
