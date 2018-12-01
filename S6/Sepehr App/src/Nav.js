
import { 
    createAppContainer, 
    createSwitchNavigator, 
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator 
} from 'react-navigation'

import { Platfrom } from 'react-native'

import CustomDrawer from './CustomDrawer';

import Loading from './screens/Loading'
//
import Welcome from './screens/Welcome'
import Login from './screens/Login'
//
import AddFile from './screens/AddFile'
import Downloads from './screens/Downloads'
import Files from './screens/Files'
import Setting from './screens/Setting'

const AuthStackNav = createStackNavigator({
    Welcome: Welcome,
    Login: Login
}, {
    headerMode: 'none'
})

const AppTabNav = createBottomTabNavigator({
    AddFile: AddFile,
    Downloads: Downloads,
    Files: Files,
    Setting: Setting
}, {
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
        activeBackgroundColor: 'rgba(255, 0, 0, 0.6)',
        inactiveBackgroundColor: 'rgba(255, 0, 0, 0.3)'
    }
})

const AppDrawerNav = createDrawerNavigator({
    AddFile: AddFile,
    Downloads: Downloads,
    Files: Files,
    Setting: Setting
}, {
    drawerPosition: 'right',
    contentComponent: CustomDrawer
})

const AppSwitchNav = createSwitchNavigator({
    Loading: Loading,
    Auth: AuthStackNav,
    App: AppDrawerNav
})


export default createAppContainer(AppSwitchNav)