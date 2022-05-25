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
    amount: 249,
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1567186937675-a5131c8a89ea?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500",
  },
];

export const countries = [
  {
    id: uuidv4(),
    country: "Spain",
    flag: "https://flagcdn.com/w320/es.png",
    seo: "35%",
    value: "12,500",
  },
  {
    id: uuidv4(),
    country: "Nigeria",
    flag: "https://flagcdn.com/w320/ng.png",
    seo: "72%",
    value: "500",
  },
  {
    id: uuidv4(),
    country: "Egypt",
    flag: "https://flagcdn.com/w320/eg.png",
    seo: "47%",
    value: "500,00",
  },
  {
    id: uuidv4(),
    country: "Romania",
    flag: "https://flagcdn.com/w320/ro.png",
    seo: "95%",
    value: "15,400",
  },
  {
    id: uuidv4(),
    country: "Norway",
    flag: "https://flagcdn.com/w320/no.png",
    seo: "100%",
    value: "150,900",
  },
];
