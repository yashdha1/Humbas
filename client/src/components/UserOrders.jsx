import React, { useState } from "react";
import {
  Box,
  Button, 
  Heading, 
  Menu,
  MenuButton,
  MenuList,
  MenuItem, 
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const Orders = () => {
 
    const [order, setOrder] = useState({
    userId: "64ef9a2a5c7e8f1234567890",
    products: [
      {
        product: "64f0b1d75a8a3e1234567890",
        quantity: 2,
        price: 499.99,
      },
      {
        product: "64f0b1d75a8a3e1234567891",
        quantity: 1,
        price: 1299.99,
      },
    ],
    status: "Pending",
    totalAmount: 2 * 499.99 + 1 * 1299.99,
  });

  // Example update function (e.g. mark as shipped)
  const updateStatus = (newStatus) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      status: newStatus,
    }));
  };

//   TODO: Add the logic to fetch the user's orders and display them according to the user selected status of the ORDER. 
  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Heading>Orders History</Heading>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Filter Orders
          </MenuButton>
          <MenuList >
            <MenuItem onClick={() => updateStatus("pending")}>Pending</MenuItem>
            <MenuItem onClick={() => updateStatus("Shipped")}>Shipped</MenuItem>
            <MenuItem onClick={() => updateStatus("Delivered")}>Delivered</MenuItem>
            <MenuItem onClick={() => updateStatus("Cancelled")}>Cancelled</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      
    </div>
  );
};

export default Orders;
