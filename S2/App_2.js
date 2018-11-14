
// Import some helpers
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Component
class App extends Component {
    render() {
        return(
            <View>
                <Text style={styles.firstTextStyle}>سلام</Text>
                <Text style={styles.secondTextStyle}>متن دوم</Text>
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