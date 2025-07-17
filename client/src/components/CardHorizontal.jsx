import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Image,
  Text,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export const CardHorizontal = ({ data, quantity, onIncrement, onDecrement }) => {
  return (
    <Card
      direction="row"
      overflow="hidden"
      maxW="full"
      variant="outline"
      m="2"
    >
      <Image
        objectFit="cover"
        maxW="120px"
        src={data.Product.image}
        alt={data.Product.name}
      />
      <Box flex="1">
        <CardBody>
          <Heading size="sm">{data.Product.name}</Heading>
          <Text fontSize="sm">₹{data.Product.price}</Text>
          <Text fontSize="xs">Metric: {data.Product.metric}</Text>
          <HStack mt="2">
            <Badge colorScheme="green">{data.Product.category}</Badge>
          </HStack>
        </CardBody>
        <CardFooter justify="space-between" alignItems="center">
          <HStack spacing="2">
            <IconButton
              size="sm"
              icon={<MinusIcon />}
              onClick={onDecrement}
              aria-label="decrease"
              isDisabled={quantity === 0}
            />
            <Text>{quantity}</Text>
            <IconButton
              size="sm"
              icon={<AddIcon />}
              onClick={onIncrement}
              aria-label="increase"
            />
          </HStack>
        </CardFooter>
      </Box>
    </Card>
  );
};
  