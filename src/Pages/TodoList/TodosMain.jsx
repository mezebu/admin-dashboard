import React from "react";
import { Box, Grid, Toolbar } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import Todo from "./Todo";

const container = {
  hidden: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "string",
      duration: 1,
      stiffness: 100,
    },
  },
};

const TodosMain = ({ todoItems, setTodoItems, filteredCategory }) => {
  return (
    <AnimatePresence>
      <Box>
        <Toolbar />
        <Grid container spacing={2} component={motion.div} variants={container}>
          {filteredCategory.map(({ id, title, completed, time }) => (
            <Grid key={id} item xs={12} sm={12} md={6} lg={4}>
              <Todo
                todoItems={todoItems}
                setTodoItems={setTodoItems}
                title={title}
                id={id}
                completed={completed}
                time={time}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </AnimatePresence>
  );
};

export default TodosMain;
