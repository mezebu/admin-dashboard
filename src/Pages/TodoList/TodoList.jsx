import React, { useState, useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";

import Drawer from "../../components/Drawer/Drawer";
import FormInput from "./FormInput";
import TodosMain from "./TodosMain";

const TodoList = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [category, setCategory] = useState("all");
  const [filteredCategory, setFilteredCategory] = useState([]);

  const filterCategory = () => {
    switch (category) {
      case "completed":
        setFilteredCategory(
          todoItems.filter((todo) => todo.completed === true)
        );
        break;
      case "uncompleted":
        setFilteredCategory(
          todoItems.filter((todo) => todo.completed === false)
        );
        break;
      default:
        setFilteredCategory(todoItems);
        break;
    }
  };

  useEffect(() => {
    filterCategory();
    saveToLocalStorage();
  }, [category, todoItems]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    getLocalStorageItems();
  }, []);

  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  };

  const getLocalStorageItems = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodoItems(localTodos);
    }
  };

  return (
    <Drawer>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          Todo List
        </Typography>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <FormInput
            setTodoInput={setTodoInput}
            todoItems={todoItems}
            setTodoItems={setTodoItems}
            todoInput={todoInput}
            setCategory={setCategory}
            category={category}
          />
        </Box>
        <Box>
          <TodosMain
            filteredCategory={filteredCategory}
            todoItems={todoItems}
            setTodoItems={setTodoItems}
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default TodoList;
