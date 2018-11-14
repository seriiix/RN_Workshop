
// Import some helpers
import React, { Component } from 'react';
import { Text } from 'react-native';

// Component
class App extends Component {
    render() {
        return(
            <Text style={styles.textStyle} >سلام</Text>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 36,
        color: 'blue'
    }
}

// Export - Make it available
export default App;