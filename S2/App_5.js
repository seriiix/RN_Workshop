
// Import some helpers
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import CustomText from './src/CustomText';

// Component
class App extends Component {

    render() {
        return(
            <View>
                <CustomText customText={'سلام'} />
                <CustomText customText={'متن دوم'} />
            </View>
        )
    }
}

// Export - Make it available
export default App;