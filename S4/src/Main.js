
import React, { Component } from 'react';
import { Container, Header, Title, Content, Card, CardItem } from 'native-base';
import { Text } from 'react-native';
//
import FileCard from './components/FileCard';

export default class App extends Component {
    render() {
        return(
            <Container>

                {/* Header */}
                <Header style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Title>{'Download List'}</Title>
                </Header>

                {/*Main Part*/}
                <Content style={{ backgroundColor: '#D5DCF7', marginRight: 5, marginLeft: 5 }}>
                    <FileCard fileName={'react-native.zip'} progress={'55'}/>
                    <FileCard fileName={'movie.zip'} progress={'23'}/>
                    <FileCard fileName={'adobe_after_effects_cc2018.zip'} progress={'11'}/>
                </Content>

            </Container>
        )
    }
}