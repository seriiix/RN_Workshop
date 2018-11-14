
// Import some helpers
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

// Component
class App extends Component {

    state = {
        secondText: 'متن ابتدایی'
    }

    _handleButtonClick() {
        this.setState({ secondText: 'متن تغییر یافته' })
    }

    render() {
        return(
            <View>
                <Text style={styles.firstTextStyle}>سلام</Text>
                <Text style={styles.secondTextStyle}>{this.state.secondText}</Text>
                <Button 
                    title={'تغییر متن بالا'}
                    onPress={() => this._handleButtonClick()}
                />
            </View>
        )
    }
}

const styles = {
    firstTextStyle: {
        fontSize: 36,
        color: 'blue',
        backgroundColor: 'black'
    },
    secondTextStyle: {
        fontSize: 64,
        color: 'purple',
        borderWidth: 3,
        borderColor: 'purple'
    }
}

// Export - Make it available
export default App;