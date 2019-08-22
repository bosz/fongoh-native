import React, { Component } from 'react';
import SectionHeader from './../../components/SectionHeader/SectionHeader.page';
import {s_img, s_flex, s_all, s_alert, s_text, s_justify} from './../../services/theme';
import styles from './Theming.style';

import {
  	ImageBackground,
  	ScrollView, 
  	Text,
  	TextInput, 
  	View,
} from 'react-native';


class Theming extends Component {
	constructor(props) {
	  	super(props);
	
	  	this.state = {};
	}

	componentDidMount() {
		
	}

  	render() {
	    return (
    		<ImageBackground 
		        source={require('./../../../res/fongoh.jpg')} 
		        style={s_img.background}>
	    		<ScrollView style={s_all.img_root}>
			      	<View style={s_all.section}>
			      		<SectionHeader text="Learning react native design with flexbox" />

			      		<View style={[s_all.section, s_flex.row, {height: 400}]}>
							<View style={[s_flex.col2, s_alert.secondary, s_justify.around]}>
								<View style={[s_alert.danger]}><Text>I am groot</Text></View>		      			
								<View style={[s_alert.info]}><Text>The world is groot</Text></View>		      			
							</View>		      			
				      		<View style={[s_flex.col1, s_alert.light, s_justify.around]}>
								<View style={[s_alert.success]}><Text>I am col1 around</Text></View>		      			
								<View style={[s_alert.danger]}><Text>Col2 is my name, middle</Text></View>		      			
								<View style={[s_alert.default]}><Text>I am col3, at bottom</Text></View>		      			
				      		</View>
			      		</View>

			      		<View style={[s_all.section, s_flex.row]}>	      			
							<View style={[s_flex.col2, s_alert.success, s_justify.around]}><Text>Horizontal col2</Text></View>		      			
							<View style={[s_flex.col3, s_alert.danger, , s_justify.around]}><Text>This has more content and is being pushed down</Text></View>		      			
							<View style={[s_flex.col3, s_alert.info, s_justify.around]}><Text>End, col3 horizontal</Text></View>		      			
			      		</View>
			      	</View>
	    		</ScrollView>


		    </ImageBackground>
	    );
  	}
}

export default Theming;