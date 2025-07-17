import React, { useState } from "react";
import { CardHorizontal } from "./CardHorizontal";
import {
  Box,
  Heading,
  VStack,
  Text,
  Divider,
  Button,
  Textarea,
} from "@chakra-ui/react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      quantity: 2,
      Product: {
        name: "Organic Paneer",
        price: 300,
        image:
          "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        category: "dairy",
        metric: "weight",
      },
    },
    {
      quantity: 1,
      Product: {
        name: "Brown Bread",
        price: 50,
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        category: "bakery",
        metric: "pieces",
      },
    },
    {
      quantity: 3,
      Product: {
        name: "Fresh Apples",
        price: 120,
        image:
          "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        category: "fruits",
        metric: "weight",
      },
    },
    {
      quantity: 1,
      Product: {
        name: "Almond Milk",
        price: 180,
        image:
          "https://images.unsplash.com/photo-1615485927853-5c443c72e3cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        category: "beverages",
        metric: "liters",
      },
    },
  ]);

  const handleIncrement = (index) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (index) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.Product.price,
    0
  );

  return (
    <div className="flex h-screen p-4 gap-6">
      {/* Left: Scrollable vertical stack */}
      <div className="flex-1 overflow-y-auto pr-4">
        <VStack spacing={4} align="stretch">
          {cartItems.map((item, index) => (
            <CardHorizontal
              data={item}
              quantity={item.quantity}
              key={index}
              onIncrement={() => handleIncrement(index)}
              onDecrement={() => handleDecrement(index)}
            />
          ))}
        </VStack>
      </div>

      {/* Right: Static bill summary */}
      <div className="min-w-[300px] max-w-[300px] border-l pl-4">
        <Heading size="md" mb={4} className="font-semibold">
          Your Bill
        </Heading>
        <VStack align="stretch" spacing={2} fontSize="sm">
          {cartItems.map((item, index) => (
            <Box key={index} className="flex justify-between">
              <Text>{item.Product.name}</Text>
              <Text>₹{item.Product.price * item.quantity}</Text>
            </Box>
          ))}
        </VStack>
        <Divider my={3} />
        <Box className="flex justify-between font-semibold text-lg ">
          <Text>Grand Total</Text>
          <Text className="font-bold  bg-slate-200">₹{total}/-</Text>
        </Box>
        <Box className="flex justify-end mt-4">
          <Button colorScheme="teal">Checkout</Button>
        </Box>
        
        <Divider my={3} />
        <Box>
            <h6>Notice!</h6>
            <p></p>
            <p>Currently we are offering Cash On delivery Serivices only and </p>
        </Box>
      </div>
    </div>
  );
};

export default Cart;
