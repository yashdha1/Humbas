import {
  Box,
  Button,
  Text,
  Heading,
  Stack,
  Card,
  CardBody, 
  VStack, 
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react"; 

import Cart from "../components/Cart";
import Orders from "../components/UserOrders";

const Profile = () => {
  const user = {
    name: "John Doe",
    email: "I0S4o@example.com",
    phone: "123-456-7890",
    address: "123 Main St, City, Country",
    orders: [
      { id: 1, item: "Organic Paneer", quantity: 2, total: 300 },
      { id: 2, item: "Fresh Milk", quantity: 1, total: 50 },
    ],
  };

  const cardBg = useColorModeValue("white", "gray.800");
  const cardShadow = useColorModeValue("md", "dark-lg");

  return (
    <Box maxW="6xl" mx="auto" px={{ base: 4, md: 8 }} py={6}>
      {/* Profile Info Card */}
      <Card bg={cardBg} shadow={cardShadow} borderRadius="2xl" overflow="hidden" mb={8}>
        <CardBody>
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
            spacing={6}
          >
            <VStack align="start" spacing={2}>
              <Heading size="lg">Welcome, {user.name}</Heading>
              <Text><b>Email:</b> {user.email}</Text>
              <Text><b>Phone:</b> {user.phone}</Text>
              <Text><b>Address:</b> {user.address}</Text>
              <Text><b>Total Orders:</b> {user.orders.length}</Text>
            </VStack>

            <Button colorScheme="blue"   alignSelf={{ base: "stretch", md: "flex-end" }}>
              Edit Profile
            </Button>
          </Stack>
        </CardBody>
      </Card>

      <Tabs isFitted variant="enclosed-colored" colorScheme="teal">
        <TabList mb="4" borderRadius="xl" overflow="hidden" border="1px solid" borderColor="gray.200">
          <Tab fontWeight="semibold">Cart</Tab>
          <Tab fontWeight="semibold">Orders</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text fontSize="md" color="gray.500">
              <Cart /> 
              {/* Cart component will display products and their quantities */}
              {/* Sales, discounts, and place order section will be handled here */}  
            </Text>
          </TabPanel>
          <TabPanel>
            <Text fontSize="md" color="gray.500">
              <Orders /> 
              {/* Orders component will display user's past orders */}
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Profile;
