import React from "react";
import { Box, FilledInput, FormControl, IconButton } from "@mui/material";
import { MenuItem, Select, InputLabel, InputAdornment } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

// prettier-ignore
const FormInput = ({ todoItems, setTodoItems, todoInput, setTodoInput, setCategory, category }) => {

  const inputHandler = (e) => {
    setTodoInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (todoInput === '') {
      toast.error('Please enter a task', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
      return
    }

    setTodoItems([
      ...todoItems,
      { title: todoInput, completed: false, id: uuidv4(), time: new Date().toLocaleString() },
    ]);
    toast.success("Task Added successfully!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    setTodoInput("");
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  }

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50vw" },
          }}
          onSubmit={submitHandler}
        >
          <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Enter todo task
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              onChange={inputHandler}
              value={todoInput}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={submitHandler}
                  >
                    <AddBoxIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 100 }}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              onChange={categoryHandler}
              labelId="simple-select-label"
              id="simple-select"
              label="Category"
              value={category}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="uncompleted">Uncompleted</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default FormInput;
