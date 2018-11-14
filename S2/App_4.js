
// Import some helpers
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

// Component
class App extends Component {

    state = {
        counter: 0
    }

    _handleButtonClick(flag) {
        if (flag) {
            this.setState({ counter: this.state.counter + 1});
        } else {
            this.setState({ counter: this.state.counter - 1})
        }
    }

    render() {
        return(
            <View>
                <Text style={styles.textStyle}>{'عدد: '}{this.state.counter}</Text>
                <Button 
                    title={'اضافه کردن'}
                    onPress={() => this._handleButtonClick(true)}
                />
                <Button 
                    title={'کم کردن'}
                    onPress={() => this._handleButtonClick(false)}
                />
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 64,
        color: 'purple',
        borderWidth: 3,
        borderColor: 'purple'
    }
}

// Export - Make it available
export default App;