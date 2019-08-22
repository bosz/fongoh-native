import React, { Component } from 'react';
import {s_hc} from './../../services/theme';
import {
  	StyleSheet,
  	View,
  	Text,
} from 'react-native';

class SectionHeader extends Component {
  	render() {
    	return (
			<View >
	  			<View style={s_hc.container}>
	  				<Text style={s_hc.text} > {this.props.text} </Text>
	  			</View>
	  		</View>
		);
  	}
}


export default SectionHeader;