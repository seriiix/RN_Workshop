
/* You should pass "this.props.navigation" from parent to this child */

import React, { Component } from 'react'
import { Icon, Header, Left, Right, Body, Button, Title } from 'native-base';

export default class CustomHeader extends Component {
    render() {
        return(
            <Header androidStatusBarColor={'#2f3e46'} iosBarStyle={'light-content'} style={{ backgroundColor: '#2f3e46' }} >
                <Left style={{ flex: 0.2 }}>
                </Left>
                <Body style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                    <Title style={{ color: 'white' }}>{this.props.title}</Title>
                </Body>
                <Right style={{ flex: 0.2 }}>
                    <Button
                        transparent
                        onPress={() => this.props.navigation.toggleDrawer()}
                    >
                        <Icon name='ios-menu' fontSize={'20'} style={{ color: 'white' }} />
                    </Button>
                </Right>
            </Header>
        )
    }
}