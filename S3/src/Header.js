import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class Header extends Component {

    render() {
        return(
            <View 
                style={{ 
                    flex: 1, 
                    backgroundColor: 'rgba(200, 200, 200, 1)', 
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={styles.textStyle}>{this.props.headerTitle}</Text>
            </View>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 24,
    }
}
