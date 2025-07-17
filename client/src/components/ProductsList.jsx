import { Trash } from "lucide-react";
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
// import { useProductStore } from "../stores/useProductStore";

const updateStatus = (newStatus) => {
  setOrder((prevOrder) => ({
    ...prevOrder,
    status: newStatus,
  }));
};

const ProductsList = () => {
  // const { deleteProduct,  products } = useProductStore();
  const products = [
    {
      _id: 1,
      name: "Organic Paneer",
      image: "https://example.com/paneer.jpg",
      price: 5.99,
      category: "dairy",
    },
  ];
  return (
    <div className="flex flex-col ">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      > 
        <Menu className="border-b-2 border-gray-700">
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Filter Category
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => updateStatus("Dairy")}>Dairy</MenuItem>
            <MenuItem onClick={() => updateStatus("Fruits")}>Fruits</MenuItem>
            <MenuItem onClick={() => updateStatus("Vegetables")}>Vegetables</MenuItem>
            <MenuItem onClick={() => updateStatus("Others")}>Others</MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <table className=" min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-700">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Products
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="bg-gray-800 divide-y divide-gray-700">
          {products?.map((product) => (
            <tr key={product._id} className="hover:bg-gray-700">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm font-medium text-white">
                      {product.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-300">
                  RS {product.price.toFixed(2)}
                </div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  // onClick={() => deleteProduct(product._id)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductsList;
