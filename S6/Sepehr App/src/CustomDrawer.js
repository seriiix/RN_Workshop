
import React, { Component } from 'react'
import { Text, List, ListItem, Icon, Container } from 'native-base'
import { Image } from 'react-native'

const routes = [
	{ name: 'افزودن فایل' , route: 'AddFile', icon: 'home' },
	{ name: 'دانلود ها', route: 'Downloads', icon: 'search' },
	{ name: 'فایل های من', route: 'Files', icon: 'add-circle' },
	{ name: 'تنظیمات', route: 'Setting', icon: 'star' }
]

export default class SideBar extends Component {

	render() {

		return (
			<Container style={{ flex: 1, backgroundColor: '#cad2c5' }}>
                <Image style={{ width: '100%', height: 170 }} source={require('./assets/images/drawerImage.png')} />
				<List
					dataArray={routes}
					contentContainerStyle={{}}
					renderRow={data => {
						return (
							<ListItem
                                button
								onPress={() => this.props.navigation.navigate(data.route)}
								style={styles.list}
							>
								<Icon style={styles.itemIcon} name={data.icon} />
								<Text style={styles.itemText}>{data.name}</Text>
							</ListItem>
						)
					}}
				/>
				<Text style={{ alignSelf: 'center', marginBottom: 5, fontSize: 12 }}>{'نسخه آزمایشی 0.1'}</Text>
				<Text style={{ alignSelf: 'center', marginBottom: 10, fontSize: 10 }}>{'Sadjad-UT React Native Workshop'}</Text>
			</Container>
		)
	}
}

const styles = {
    list: {
        flexDirection: 'row-reverse',
        borderBottomColor: '#84a98c',
        borderBottomWidth: 2,
        paddingBottom: 10,
		marginLeft: 0,
		marginRight: 0
    },
    itemIcon: {
        marginRight: 20,
        fontSize: 20,
        color: '#354f52'
    },
    itemText: {
        marginRight: 15,
        fontSize: 16,
        //fontFamily: 'IRANSansMobile',
        color: '#333333',
    }
}