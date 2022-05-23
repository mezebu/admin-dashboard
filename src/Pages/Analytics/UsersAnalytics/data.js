import { v4 as uuidv4 } from "uuid";

export const transactions = [
  {
    id: uuidv4(),
    label: "Receive money from",
    user: "Annette Black",
    amount: 50,
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500",
  },
  {
    id: uuidv4(),
    label: "Payment for",
    user: "Courtney Henry",
    amount: 1005,
    status: "In progress",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500",
  },

  {
    id: uuidv4(),
    label: "Payment for",
    user: "Victor Plains",
    amount: 750,
    status: "Failed",
    image:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500",
  },
  {
    id: uuidv4(),
    label: "Payment for",
    user: "Utilities",
    amount: 499,
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1485893086445-ed75865251e0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
  },
  {
    id: uuidv4(),
    label: "Payment for",
    user: "Insurance",
    amount: "249",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
  },
];
