
import React, { Component } from 'react';
import { Text, AsyncStorage, ActivityIndicator } from 'react-native';
import { List, ListItem, Container, CardItem } from 'native-base';
import CustomHeader from '../common/CustomHeader';

export default class App extends Component {

    state = {
        loaded: false,
        files: []
    }

    async componentDidMount() {
        try {
            const result = await fetch('https://sepehr.sadjad.ac.ir/api/v1/files?token=' + await AsyncStorage.getItem('token'));
            const resultJson = await result.json();
            if (resultJson.status == 'OK') {
                this.setState({ files: resultJson.files, loaded: true })
            }
        } catch (err) {

        }
    }

    renderList() {
        if (!this.state.loaded) {
            return (
                <Container style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#cad2c5' }}>
                    <Text style={{ color: '#2f3e46', marginRight: 5 }}>{'در حال دریافت اطلاعات'}</Text>
                    <ActivityIndicator color={'#2f3e46'} />
                </Container>
            )
        } else {
            return (
                <List 
                    dataArray={this.state.files}
                    style={{ marginTop: 10 }}
                    renderRow={(item) => {
                        return(
                            <CardItem 
                                button
                                onPress={() => alert(item.link)}
                                style={{ marginLeft: 10, marginRight: 10, marginBottom: 5, borderColor: '#84a98c', borderWidth: 2, backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                            >
                                <Text style={{ marginLeft: 10, marginRight: 10 }}>{item.name}</Text>
                            </CardItem>
                        )
                    }}
                />
            )
        }
    }
    

    render() {
        return(
            <Container style={{ backgroundColor: '#cad2c5' }}>
                <CustomHeader 
                    navigation={this.props.navigation}
                    title={'فایل ها'}
                />
                {this.renderList()}

                
            </Container>
        )
    }
}