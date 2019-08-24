import React, {Component} from 'react';
import { ImageBackground, TouchableOpacity, Picker, StyleSheet, TextInput, Text, View, Platform } from 'react-native';
import { PushNotifications } from './../../services';
import styles from './Home.style';

class Home extends Component<Props> {
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
        source={require('./../../../res/fongoh.jpg')} 
        style={styles.root}>
        <View style={styles.container}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={[styles.welcome, {marginBottom: 5}]}>Learning React Native!</Text>
            <Text style={styles.instructions}>With</Text>
            <Text style={[styles.welcome, {marginBottom: 5}]}>Fongoh Martin</Text>
          </View>

          <View style={{ flex: 3, borderWidth: 1, paddingHorizontal: 10, borderColor: '#ecf0f1' }}>
            <Text style={[styles.instructions]}>Topics covered</Text>
            <View style={styles.actionButtonContainer}>
              <TouchableOpacity style={styles.actionButton} onPress={() => this.props.navigation.navigate('AppNotification')} >
                <Text style={styles.actionButtonText}>Notification</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => this.props.navigation.navigate('Theming')} >
                <Text style={styles.actionButtonText}>Theming</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => this.props.navigation.navigate('FlexBox')} >
                <Text style={styles.actionButtonText}>FlexBox structuring</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={() => this.props.navigation.navigate('ListOfItems')} >
                <Text style={styles.actionButtonText}>List of Items</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} >
                <Text style={[styles.actionButtonText, styles.lineThrough]}>Redux (pending)</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Home;