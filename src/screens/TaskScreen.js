import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, completeTask, deleteTask } from '../redux/tasksSlice';
import TaskItem from '../components/TaskItem';
import colors from '../theme/colors';


export default function TaskScreen() {
  const [task, setTask] = useState('');
  const pendingTasks = useSelector(state => state.tasks.pendingTasks);
  const completedTasks = useSelector(state => state.tasks.completedTasks);
  const dispatch = useDispatch();

  // agregar una nueva tarea
  const handleAddTask = () => {
    if (task) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  // completar o descompletar una tarea
  const handleCompleteTask = (key) => {
    dispatch(completeTask(key));
  };

  // eliminar una tarea
  const handleDeleteTask = (key) => {
    dispatch(deleteTask(key));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tareas</Text>
      {/* agrega una nueva tarea */}
      <TextInput
        style={styles.input}
        placeholder="agrega una nueva tarea"
        placeholderTextColor={colors.secondaryText}
        value={task}
        onChangeText={setTask}
      />
      {/* Botón para agregar la tarea */}
      <Pressable style={styles.pressable} onPress={handleAddTask}>
        <Text style={styles.pressableText}>Agregar</Text>
      </Pressable>
      {/*tareas pendientes y completadas */}
      <FlatList
        style={styles.list}
        data={[...pendingTasks, ...completedTasks]}
        renderItem={({ item }) =>
          <TaskItem
            task={item}
            onComplete={handleCompleteTask}
            onDelete={handleDeleteTask}
          />
        }
        keyExtractor={item => item.key}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryBackground,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: colors.primaryText,
    marginBottom: 16,
  },
  pressable: {
    backgroundColor: colors.buttonLink,
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },
  pressableText: {
    color: colors.primaryBackground,
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: colors.secondaryText,
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '80%',
    backgroundColor: colors.secondaryBackground,
  },
  list: {
    width: '100%',
    marginTop: 16,
  },
});
