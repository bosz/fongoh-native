import React, {Component} from 'react';
import { ImageBackground, TouchableOpacity, StyleSheet, TextInput, Text, View } from 'react-native';
import { PushNotifications } from './../services';

class HomeScrn extends Component<Props> {
  constructor(props) {
    super(props);
  
    this.state = {
      message: 'Default message to Fongoh',
    };
  }
  sendNotification() {
    PushNotifications.localNotification(this.state.message);
  }
  render() {
    return (
      <ImageBackground source={require('../../res/fongoh.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Text style={[styles.welcome, {marginBottom: 10}]}>Learning React Native!</Text>
          <Text style={[styles.instructions]}>With</Text>
          <Text style={[styles.welcome, {marginBottom: 30}]}>Fongoh Martin</Text>

          <View>
            <TextInput 
              underlineColorAndroid="transparent"
              placeholder="Say something nice"
              autoCapitalize="sentences"
              onChangeText={ (text) => this.setState({message: text}) } 
              placeholderTextColor="#ffffffa3"
              style={{ borderWidth: 1, color: '#fff', borderColor: '#e74c3ca0', backgroundColor: '#e74c3c70', width: 300, marginBottom: 10, height: 44, paddingVertical: 10, paddingHorizontal: 20 }} />
          </View>
          <TouchableOpacity 
            style={{ padding: 10, backgroundColor: '#e74c3c' }} 
            onPress={() => this.sendNotification()}
            >
            <Text style={[styles.instructions, {color: '#fff', fontWeight: 'bold'}]}>Notify Him</Text>
          </TouchableOpacity>

          <Text style={[styles.instructions, styles.lineThrough]}>Remote Notifications</Text>
          <Text style={[styles.instructions, styles.lineThrough]}>Redux</Text>
          <Text style={[styles.instructions, styles.lineThrough]}>Theming</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34495ec0',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    color: '#ecf0f1'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    color: '#ecf0f1',
    margin: 10,
  },
  lineThrough: {
    textDecorationLine: 'line-through',
  },
});

export default HomeScrn;