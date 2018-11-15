//Import helpers
import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './src/Header';

//Make a new component
class App extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.15, backgroundColor: 'red' }}>
                    <Header />
                </View>
                <View style={{ flex: 0.70, backgroundColor: 'pink' }}>
                    <View style={{ flex: 0.4, backgroundColor: 'orange' }}>
                        
                    </View>

                    <View style={{ flex: 0.6, backgroundColor: 'cyan', flexDirection: 'row' }}>
                        <View style={{ flex: 0.7, backgroundColor: 'yellow' }}></View>
                        <View style={{ flex: 0.3, backgroundColor: 'black' }}></View>
                    </View>
                </View> 
                <View style={{ flex: 0.15, backgroundColor: 'blue' }}>
                
                </View>     
            </View>
            
        )
    }

}


//Export component
export default App;