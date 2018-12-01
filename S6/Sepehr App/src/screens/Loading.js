
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, AsyncStorage } from 'react-native';

export default class App extends Component {

    async componentDidMount() {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            this.props.navigation.navigate('App');
        } else {
            this.props.navigation.navigate('Auth');
        }
    }

    render() {
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }
}