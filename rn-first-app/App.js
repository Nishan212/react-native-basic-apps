import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [goals, setGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = (goalTitle) => {
        setGoals((currentGoals) => [
            ...currentGoals,
            { id: Math.random().toString(), value: goalTitle },
        ]);
        setIsAddMode(false);
    };

    const removeGoalHanlder = (goalId) => {
        setGoals((currentGoals) =>
            currentGoals.filter((goal) => goal.id !== goalId)
        );
    };
    const cancelGoalHanlder = () => {
        setIsAddMode(false);
    };

    return (
        <View style={styles.screen}>
            <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
            <GoalInput
                visible={isAddMode}
                onAddGoal={addGoalHandler}
                onCancel={cancelGoalHanlder}
            />
            <FlatList
                data={goals}
                keyExtractor={(item, index) => item.id}
                renderItem={(itemData) => (
                    <GoalItem
                        id={itemData.item.id}
                        title={itemData.item.value}
                        onDelete={removeGoalHanlder}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
});
