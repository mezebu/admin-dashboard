import React from "react";

import CustomersTable from "./CustomersTable";
import CustomersHeader from "./CustomersHeader";
import Drawer from "../../components/Drawer/Drawer";

const Customers = () => {
  return (
    <Drawer>
      <CustomersHeader />
      <CustomersTable />
    </Drawer>
  );
};

export default Customers;
