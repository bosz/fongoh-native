import React, { Component } from 'react';
import {
  View,
  ScrollView, 
  Text, 
} from 'react-native';
import styles from './ListOfItems.style';

const Item = (props) => {
	return (
		<View style={styles.itemContainer}>
			<Text style={styles.itemText}>{props.text}</Text>
		</View>
	);
}

const names = ['Martin', 'Martin', 'Abdoul', 'Durrell', 'Oben', 'Martin', 'Martin', 'Abdoul', 'Durrell', 'Oben','Buma', 'Velery', 'Base']
class ListOfItems extends Component {
  	render() {
	    return (
	      	<ScrollView>
	      		{names.map((name, key) => <Item  key={key} text={name} />)}
	      	</ScrollView>
	    );
  	}
}

export default ListOfItems;
