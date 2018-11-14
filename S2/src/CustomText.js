
import React, { Component } from 'react';
import { Text } from 'react-native';

class CustomText extends Component {
    render() {
        return(
            <Text style={styles.textStyle}>{this.props.customText}</Text>
        )
    }
}

const styles = {
    textStyle: {
        fontSize: 32,
        color: 'blue'
    }
}

export default CustomText;