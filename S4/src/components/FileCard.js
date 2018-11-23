
import React, { Component } from 'react';
import { Card, CardItem } from 'native-base';
import { Text } from 'react-native';

export default class FileCard extends Component {
    render() {
        return (
            <Card>
                <CardItem style={{ justifyContent: 'space-between' }}>
                    <Text>{'File Name: '}{this.props.fileName}</Text>
                    <Text>{'%'}{this.props.progress}</Text>
                </CardItem>
            </Card>
        )
    }
}