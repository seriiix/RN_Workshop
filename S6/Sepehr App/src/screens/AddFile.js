
import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import { List, ListItem, Container, Icon } from 'native-base';
import CustomHeader from '../common/CustomHeader';

export default class App extends Component {

    static navigationOptions = {
        title: 'اضافه کردن فایل',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-add" size={30} color={tintColor} />
        )
    }

    render() {
        return(
            <Container style={{ backgroundColor: '#cad2c5' }}>
                <CustomHeader 
                    navigation={this.props.navigation}
                    title={'افزودن فایل'}
                />
                <Text
                    onPress={() => this.props.navigation.toggleDrawer()}
                >AddFile</Text>
            </Container>
        )
    }
}