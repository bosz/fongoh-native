import React, {Component} from 'react';
import { ImageBackground, TouchableOpacity, Picker, StyleSheet, TextInput, Text, View, Platform } from 'react-native';
import { PushNotifications } from './../services';

class HomeScrn extends Component<Props> {
  constructor(props) {
    super(props);
  
    this.state = {
      message: 'Default message to Fongoh',
      seconds: 0,
    };
  }
  sendNotification() {
    const seconds = this.state.seconds; 
    if (seconds == 0) {
      PushNotifications.localNotification(this.state.message);
      return true
    }
    // if (appState === 'background') {
      let date = new Date(Date.now() + (this.state.seconds * 1000));
      if (Platform.OS === 'ios') {
        date = date.toISOString();
      }
      PushNotifications.localNotificationSchedule(this.state.message, date);
    // }
    
  }
  render() {
    var durations = [0,3,5,10,15,30];
    return (
      <ImageBackground 
        source={require('../../res/fongoh.jpg')} 
        style={styles.root}>
        <View style={styles.container}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={[styles.welcome, {marginBottom: 10}]}>Learning React Native!</Text>
            <Text style={[styles.instructions]}>With</Text>
            <Text style={[styles.welcome, {marginBottom: 30}]}>Fongoh Martin</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 2, justifyContent: 'center' }}>
              <TextInput 
                underlineColorAndroid="transparent"
                placeholder="Say something nice"
                autoCapitalize="sentences"
                onChangeText={ (text) => this.setState({message: text}) } 
                placeholderTextColor="#ffffffa3"
                style={{ marginRight: 3, borderWidth: 1, color: '#fff', borderColor: '#e74c3ca0', backgroundColor: '#e74c3c70', marginBottom: 10, height: 44, paddingVertical: 10, paddingHorizontal: 20 }} />
            </View>
          
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <TextInput 
                underlineColorAndroid="transparent"
                placeholder="Duration"
                autoCapitalize="sentences"
                onChangeText={ (text) => this.setState({seconds: text}) } 
                placeholderTextColor="#ffffffa3"
                style={{ marginLeft: 3, borderWidth: 1, color: '#fff', borderColor: '#e74c3ca0', backgroundColor: '#e74c3c70', marginBottom: 10, height: 44, paddingVertical: 10, paddingHorizontal: 20 }} />
              
            </View>
          </View>
          <View>
            <TouchableOpacity 
              style={{ padding: 10, backgroundColor: '#e74c3c' }} 
              onPress={() => this.sendNotification()}
              >
              <Text style={[styles.instructions, {color: '#fff', fontWeight: 'bold'}]}>Notify Him</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={[styles.instructions]}>Remote Notifications</Text>
            <Text style={[styles.instructions, styles.lineThrough]}>Redux</Text>
            <Text style={[styles.instructions, styles.lineThrough]}>Theming</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    width: '100%', 
    height: '100%'
  },
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '100%',
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
  picker: {
    width: 100,
  },
});

export default HomeScrn;