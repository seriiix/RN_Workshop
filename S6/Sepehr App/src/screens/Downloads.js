
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem, Container } from 'native-base';
import CustomHeader from '../common/CustomHeader';

export default class App extends Component {
    render() {
        return(
            <Container style={{ backgroundColor: '#cad2c5' }}>
                <CustomHeader 
                    navigation={this.props.navigation}
                    title={'دانلود‌ ها'}
                />
            </Container>
        )
    }
}