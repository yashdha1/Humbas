import React, { useState, useEffect } from "react";
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
import axios from "axios";
import { useUserStore } from "../store/useUserStore";
import { useCartStore } from "../store/useCartStore";

const Cart = () => {
  
  const { user } = useUserStore(); 
  const { cart, getCartItems, updateQuantity } = useCartStore(); 
  
  useEffect(() => {
      getCartItems({ cartItems: user.cartItems || [] });
  }, []);

  const handleIncrement = (item, index) => {
    updateQuantity(item, cart[index].quantity + 1);
  };

  const handleDecrement = (item, index) => {
    if (cart[index].quantity > 0) {
      updateQuantity(item, cart[index].quantity - 1);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);


  return (
    <div className="flex h-screen p-4 gap-6">
      {/* Left: Scrollable vertical stack */}
      <div className="flex-1 overflow-y-auto pr-4">
        <VStack spacing={4} align="stretch">
          {cart.map((item, index) => (
            <CardHorizontal
              data={item}
              quantity={item.quantity}
              key={index}
              onIncrement={() => handleIncrement(item, index)}
              onDecrement={() => handleDecrement(item, index)}
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
          {cart.map((item, index) => (
            <Box key={index} className="flex justify-between">
              <Text>{item.name}</Text>
              <Text>₹{item.price * item.quantity}</Text>
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
