import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = ({ rounds, userNumber, onRestart }) => {
    return (
        <View style={styles.screen}>
            <Text>The Game is Over</Text>
            <Text>Number of rounds: {rounds}</Text>
            <Text>Number was: {userNumber}</Text>
            <Button title="New Game" onPress={onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default GameOverScreen;
