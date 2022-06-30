import React from "react";
import { Box, Grid, Toolbar } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import Todo from "./Todo";

const container = {
  hidden: {
    opacity: 1,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 4,
    },
  },
};

const TodosMain = ({ todoItems, setTodoItems, filteredCategory }) => {
  return (
    <Box>
      <Toolbar />
      <Grid
        container
        spacing={2}
        component={motion.div}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
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
        </AnimatePresence>
      </Grid>
    </Box>
  );
};

export default TodosMain;
