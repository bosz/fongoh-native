import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styles from './FlexBox.style';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.leftContainer}>
                        <Text>We welcome to </Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text> react native</Text>
                    </View>
                </View>
                <View style={styles.middleContainer}>
                    <Text>I am groot</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.leftContainer}>
                        <Text>Lets </Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text> code</Text>
                    </View>
                </View>
            </View>
        );
    }
}
