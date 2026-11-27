import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useReducer, useState } from "react";
import React from "react";

interface Todo {
  id: string;
  text: string;
}

interface State {
  todos: Todo[];
}

interface AddToDoAction {
  type: "ADD_TODO";
  payload: string;
}
interface DeleteToDoAction {
  type: "REMOVE_TODO";
  payload: string;
}

const initialState = { todos: [] };

type Action = AddToDoAction | DeleteToDoAction;

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          { id: Date.now().toString(), text: action.payload },
        ],
      };
    case "REMOVE_TODO":
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    default:
      throw new Error("Unhandled action type");
  }
}

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      dispatch({ type: "ADD_TODO", payload: inputValue });
      setInputValue("");
    }
  };

  const handleRemoveTodo = (id: string) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
    setInputValue("");
  };

  return (
    <View style={{ margin: 50 }}>
      <TextInput
        style={styles.input}
        placeholder="Enter a Todo"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <FlatList
        data={state.todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.todoItem}>
              <Text style={styles.todoText}>{item.text}</Text>
              <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
                <Text style={styles.removeButton}>Remove</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  todoText: {
    fontSize: 16,
  },
  removeButton: {
    color: "red",
  },
});

export default Todo;
