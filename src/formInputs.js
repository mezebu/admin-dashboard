import { v4 as uuidv4 } from "uuid";

const formInputs = [
  { id: uuidv4(), type: "text", label: "Username", placeholder: "John" },
  {
    id: uuidv4(),
    type: "text",
    label: "Name and Surname",
    placeholder: "John Doe",
  },
  {
    id: uuidv4(),
    type: "mail",
    label: "Email",
    placeholder: "johndoe@mail.com",
  },
  { id: uuidv4(), type: "text", label: "Phone", placeholder: "+123-456-789" },
  {
    id: uuidv4(),
    type: "password",
    label: "Password",
    placeholder: "Enter Password",
  },
  {
    id: uuidv4(),
    type: "text",
    label: "Address",
    placeholder: "102, Yaba Lagos",
  },
  { id: uuidv4(), type: "text", label: "Country", placeholder: "Nigeria" },
];

const products = [
  {
    id: uuidv4(),
    label: "Title",
    type: "text",
    placeholder: "Mens Casual Premium Slim Fit T-Shirts ",
  },
  {
    id: uuidv4(),
    label: "Description",
    type: "text",
    placeholder: "Phones",
  },

  {
    id: uuidv4(),
    label: "Category",
    type: "text",
    placeholder: "Computers ",
  },
  {
    id: uuidv4(),
    label: "Price",
    type: "text",
    placeholder: "$1.499",
  },
  {
    id: uuidv4(),
    label: "Stock",
    type: "text",
    placeholder: "In stock",
  },
];

export { formInputs, products };
