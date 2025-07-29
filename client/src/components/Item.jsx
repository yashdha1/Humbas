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
} from "@chakra-ui/react";
import { useUserStore } from "../store/useUserStore";

const Item = ({ product }) => {
  const { user } = useUserStore();
  return (
    <Card maxW="sm" overflow="hidden" className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-e-2">
      <Image
        src={product.image}
        alt={product.name}
        borderTopRadius="lg"
        className="object-cover h-48 w-full"
      />
      <CardBody>
        <Heading size="md">{product.name}</Heading>
        <Text mt="2">
          ₹{product.price}
        </Text>
      </CardBody>
      <CardFooter>
        {!user && <Stack direction="row" spacing="4"> 
          <Button variant="ghost">Add to cart</Button>
        </Stack>}
      </CardFooter>
    </Card>
  );
};

export default Item;
