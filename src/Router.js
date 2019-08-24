import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './pages/Home/Home.page'; 
import Theming from './pages/Theming/Theming.page'; 
import ListOfItems from './pages/ListOfItems/ListOfItems.page';
import AppNotification from './pages/AppNotification/AppNotification.page';
import FlexBox from './pages/FlexBox/FlexBox.page';

const stacks = createStackNavigator({
	Home: {
		screen: Home, 
		navigationOptions: {
			header: null,
		}
	}, 
	AppNotification: {
		screen: AppNotification,
		navigationOptions: {
			header: null,
		}
	}, 
	Theming: {
		screen: Theming,
		navigationOptions: {
			header: null,
		}
	}, 
	ListOfItems: {
		screen: ListOfItems,
		navigationOptions: {
			header: null,
		}
	}, 
	FlexBox: {
		screen: FlexBox,
		navigationOptions: {
			header: null,
		}
	}
})

const Router = createAppContainer(stacks); 

export default Router; 