import { v4 as uuidv4 } from "uuid";

const formInputs = [
  { id: "username", type: "text", label: "Username", placeholder: "John" },
  {
    id: "nameSurname",
    type: "text",
    label: "Name and Surname",
    placeholder: "John Doe",
  },
  {
    id: "email",
    type: "mail",
    label: "Email",
    placeholder: "johndoe@mail.com",
  },
  { id: "phone", type: "text", label: "Phone", placeholder: "+123-456-789" },
  {
    id: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter Password",
  },
  {
    id: "address",
    type: "text",
    label: "Address",
    placeholder: "102, Yaba Lagos",
  },
  { id: "country", type: "text", label: "Country", placeholder: "Nigeria" },
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
