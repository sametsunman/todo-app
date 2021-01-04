import React from 'react';
import {  View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ToDoItem = ({todoItem,editToDo,removeToDo}) => {
  return (
    <View style={{...styles.container,backgroundColor:todoItem.isDone?'#1de9b6':'white'}}>
      <View style={styles.done}>
      <TouchableOpacity 
          onPress={() => editToDo(todoItem.id)} 
          onLongPress={() => removeToDo(todoItem.id)}
        >
          <Text style={styles.title}>
            {todoItem.title}
          </Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    elevation: 10,
  },
  title: {
    marginVertical: 5,
  }
});

export { ToDoItem };
