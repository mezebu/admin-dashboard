import React from "react";
import * as dayjs from "dayjs";
import { Box, Card, Divider, Typography } from "@mui/material";
import { CardActions, CardContent, Button } from "@mui/material";
import { toast } from "react-toastify";
import { green } from "@mui/material/colors";
import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Todo = ({ title, todoItems, setTodoItems, id, completed, time }) => {
  const formatTime = dayjs(time).format("dddd, MMMM D, YYYY h:mm A");

  const completeHandler = () => {
    setTodoItems(
      todoItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const deleteHandler = () => {
    const filtered = todoItems.filter((item) => item.id !== id);

    setTodoItems(filtered);
    toast.error("Task has been deleted", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  return (
    <Card
      component={motion.div}
      variants={child}
      variant="outlined"
      initial="hidden"
      animate="visible"
      transition={{ type: "just", delay: 0.5 }}
    >
      <CardContent sx={{ background: completed === true ? green[500] : "" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontWeight: 600 }} variant="body1" gutterBottom>
            {title}
          </Typography>
          {completed === true && <CheckIcon fontSize="small" />}
        </Box>

        <Typography variant="subtitle2" color="text.secondary">
          {formatTime}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          onClick={completeHandler}
          size="small"
          startIcon={<CheckBoxIcon color="success" />}
        >
          completed
        </Button>
        <Button
          onClick={deleteHandler}
          size="small"
          startIcon={<DeleteIcon color="error" />}
        >
          delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Todo;
