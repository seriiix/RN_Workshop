
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class App extends Component {
    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Welcome</Text>
                <Button 
                    title={'Go To Login Page'} 
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        )
    }
}