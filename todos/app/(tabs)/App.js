import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Button } from 'react-native';
import Heading from './Heading';
import Input from './Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  inputChange = (inputValue) => {
    this.setState({ inputValue });
  };

  submitTodo = () => {
    const { inputValue, todos } = this.state;

    if (inputValue.trim() !== '') {
      const newTodo = {
        title: inputValue,
        todoIndex: todos.length,
        complete: false,
      };

      this.setState(
        {
          todos: [...todos, newTodo],
          inputValue: '',
        },
        () => {
          console.log('State: ', this.state);
        }
      );
    }
  };

  toggleComplete = (index) => {
    const todos = [...this.state.todos];
    todos[index].complete = !todos[index].complete;
    this.setState({ todos });
  };

  deleteTodo = (index) => {
    const todos = this.state.todos.filter((_, i) => i !== index);
    this.setState({ todos });
  };

  setType = (type) => {
    this.setState({ type });
  };

  getFilteredTodos = () => {
    const { todos, type } = this.state;
    if (type === 'All') return todos;
    if (type === 'Active') return todos.filter((todo) => !todo.complete);
    if (type === 'Complete') return todos.filter((todo) => todo.complete);
  };

  render() {
    const { inputValue, type } = this.state;
    const filteredTodos = this.getFilteredTodos();

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />

          <Input
            inputValue={inputValue}
            inputChange={this.inputChange}
            onSubmit={this.submitTodo}
          />

          {filteredTodos.map((todo, index) => (
            <View key={index} style={styles.todoItem}>
              <Text style={styles.todoText}>{todo.title}</Text>
              <View style={styles.todoButtons}>
                <Button
                  title="Done"
                  color="green"
                  onPress={() => this.toggleComplete(todo.todoIndex)}
                />
                <Button
                  title="Delete"
                  color="red"
                  onPress={() => this.deleteTodo(todo.todoIndex)}
                />
              </View>
            </View>
          ))}

          <View style={styles.tabBar}>
            {['All', 'Active', 'Complete'].map((filterType) => (
              <Button
                key={filterType}
                title={filterType}
                onPress={() => this.setType(filterType)}
                color={type === filterType ? '#000' : '#aaa'}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 5,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
  },
  todoText: {
    fontSize: 18,
  },
  todoButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});

export default App;


