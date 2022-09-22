import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer } from "@mui/material";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { TableHead, TableRow, Tooltip } from "@mui/material";
import { Avatar, IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { db } from "../../firebase";

const UsersTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "users"),
      (snapShot) => {
        const list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => unsub();
  }, []);

  const deleteHandler = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      const filter = data.filter((user) => user.id !== id);
      setData(filter);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="users table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Avatar</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Country</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ id, nameSurname, username, email, country, img }) => (
            <TableRow
              hover
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar src={img} alt="user-avatar" />
              </TableCell>

              <TableCell align="left">{nameSurname}</TableCell>
              <TableCell align="center">{username}</TableCell>
              <TableCell align="center">{country}</TableCell>
              <TableCell align="center">{email}</TableCell>
              <TableCell align="left">
                <Tooltip title="Delete">
                  <IconButton onClick={() => deleteHandler(id)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
