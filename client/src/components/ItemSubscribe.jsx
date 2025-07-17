import {
  Box,
  Button,
  Image,
  Text,
  Heading,
  Stack,
  Card,
  CardBody,
  CardFooter,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import SubscriptionFloater from "./SubscriptionFloater";

const ItemSubscribe = ({ product }) => {
  const [isFloaterOpen, setFloaterOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const toast = useToast();

  const handleConfirm = () => {
    toast({
      title: "Subscription Confirmed",
      description: `You've subscribed to ${product.name}`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setFloaterOpen(false);
    setAddress("");
    setPhone("");
  };

  return (
    <>
      <Card
        maxW="sm"
        overflow="hidden"
        className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-e-2 w-full "
      >
        <Image
          src={product.image}
          alt={product.name}
          borderTopRadius="lg"
          className="object-cover h-48 w-full"
        />
        <CardBody>
          <Heading size="md">{product.name}</Heading>
          <Text mt="2">₹{product.price - product.price * 0.1}/month</Text>
          <Text mt="2">
            {product.price * 0.1} cheaper than one-time purchase
          </Text>
          <Text mt="2">Type: Daily subscription</Text>
        </CardBody>
        <CardFooter>
          <Stack direction="row" spacing="4">
            <Button
              colorScheme="red"
              className="w-full"
              onClick={() => setFloaterOpen(true)}
            >
              Subscribe!
            </Button>
          </Stack>
        </CardFooter>
      </Card>

      {/* Subscription Modal */}
      {isFloaterOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          bg="blackAlpha.600"
          zIndex="999"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <SubscriptionFloater
            isOpen={isFloaterOpen}
            onClose={() => setFloaterOpen(false)}
            product={product}
            address={address}
            phone={phone}
            setAddress={setAddress}
            setPhone={setPhone}
            onConfirm={handleConfirm}
          />
        </Box>
      )}
    </>
  );
};

export default ItemSubscribe;
