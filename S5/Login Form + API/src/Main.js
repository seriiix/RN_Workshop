
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Input, Item, Button } from 'native-base'
//
import api from './api.json'

export default class Main extends Component {

    state = {
        username: '',
        password: ''
    }

    async _login() {
        const request = await fetch(api.login + '?username=' + this.state.username + '&password=' + this.state.password, {
            method: 'POST'
        })
        const result = await request.json()

        if (result.status == 'OK') {
            alert('Successful!')
        } else {
            alert('Failed! ' + result.status)
        }
    }

    render() {
        return(
            <View style={styles.background}>
                <View style={styles.container}>
                    <Item style={styles.usernameItem}>
                        <Input 
                            placeholder={'Username'} 
                            placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                            onChangeText={(text) => this.setState({ username: text })}
                            style={styles.input} 
                        />
                    </Item>
                    <Item style={styles.passwordItem}>
                        <Input 
                            placeholder={'Password'} 
                            secureTextEntry={true} 
                            placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                            onChangeText={(text) => this.setState({ password: text })}
                            style={styles.input}
                        />
                    </Item>
                    <Button 
                        style={styles.loginButton} 
                        block
                        onPress={() => this._login()}
                    >
                        <Text style={styles.requestText}>{'Login'}</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = {
    background: {
        flex: 1,
        backgroundColor: 'rgba(27, 116, 134, 0.93)'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    usernameItem: {
        borderBottomWidth: 0
    },
    passwordItem: {
        borderBottomWidth: 0,
        marginTop: 5
    },
    input: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: 'white',
        paddingLeft: 15,
    },
    requestText: {
        color: 'black',
        fontSize: 16
    },
    loginButton: {
        marginTop: 15,
        backgroundColor: 'rgba(254, 200, 16, 1)'
    }
}