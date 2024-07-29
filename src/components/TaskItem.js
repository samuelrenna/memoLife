import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import colors from '../theme/colors';


const TaskItem = ({ task, onComplete, onDelete }) => {
  return (
    <View style={styles.taskContainer}>
      {/* Texto de la tarea y se tacha si está completada */}
      <Text style={[styles.task, task.completed && styles.completedTask]}>
        {task.task}
      </Text>
      <View style={styles.icons}>
        {/* Botón para marcar completada */}
        <Pressable onPress={() => onComplete(task.key)}>
          <MaterialIcons 
            name={task.completed ? "check-circle" : "radio-button-unchecked"} 
            size={24} 
            color={colors.positiveAction} 
          />
        </Pressable>
        {/* Botón para eliminar */}
        <Pressable onPress={() => onDelete(task.key)}>
          <MaterialIcons name="delete" size={24} color={colors.alertError} />
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.primaryBackground,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondaryText,
  },
  task: {
    fontSize: 18,
    color: colors.primaryText,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: colors.secondaryText,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default TaskItem;
