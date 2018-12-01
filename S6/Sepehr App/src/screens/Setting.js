
import React, { Component } from 'react';
import { Text, AsyncStorage, View, Alert } from 'react-native';
import { Container, Button, Card, CardItem } from 'native-base';
import CustomHeader from '../common/CustomHeader';

export default class App extends Component {

    async _logout() {
        Alert.alert(
            'هشدار',
            'آیا مطمئن هستید که میخواهید از این حساب خارج شوید؟',
            [
                { text: 'خیر', style: 'cancel' },
                { text: 'بله', onPress: async () => {
                    await AsyncStorage.clear();
                    this.props.navigation.navigate('Auth');
                }}
            ]
        );
    }

    render() {
        return(
            <Container style={{ backgroundColor: '#cad2c5' }}>
                <CustomHeader 
                    navigation={this.props.navigation}
                    title={'تنظیمات'}
                />

                <View style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
                    <Button 
                        block
                        style={{ backgroundColor: '#52796f' }}
                        onPress={() => this._logout()}
                    >
                        <Text style={{ color: 'white', fontSize: 16 }}>خروج از حساب</Text>
                    </Button>               
                </View>
                
            </Container>
        )
    }
}