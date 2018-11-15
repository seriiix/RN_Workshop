import React, { Component } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native'
import Header from './src/Header';

export default class App extends Component {

    state = {
        username: '',
        password: ''
    }

    _buttonHandler() {
        if (this.state.username.length < 5) {
            Alert.alert('خطا', 'طول نام کاربری باید از 5 کارکتر بیشتر باشد')
        } else {
            Alert.alert('موفق', 'ورود با موفقیت انجام گردید');
        }
    }

    render() {
        return(
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.12 }}>
                    <Header headerTitle={'ورود'}/>
                </View>

                <View style={{ flex: 0.88, backgroundColor: 'white', justifyContent: 'center' }}>
                    <View style={{ marginLeft: 10, marginRight: 10 }}>

                    <View style={{ marginTop: 5 }}>
                        <Text style={styles.textInputsTitle}>نام کاربری</Text>
                        <TextInput 
                            style={{ backgroundColor: 'pink' }}
                            onChangeText={(text) => this.setState({ username: text })}
                            value={this.state.username}
                        />
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text style={styles.textInputsTitle}>کلمه عبور</Text>
                        <TextInput 
                            style={{ backgroundColor: 'pink' }}
                            onChangeText={(text) => this.setState({ password: text })}
                            value={this.state.password}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity  
                            style={{ height: 50, backgroundColor: 'purple', justifyContent: 'center', alignItems: 'center' }}
                            title={'ورود'}
                            onPress={() => this._buttonHandler()}
                            color={'purple'}
                        >
                            <Text style={styles.buttonTextStyle}>ورود</Text>
                        </TouchableOpacity>
                    </View>
                    
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    textInputsTitle: {
        fontSize: 20
    },
    buttonTextStyle: {
        fontSize: 20,
        color: 'white'
    }
}