import Product from "../model/product.model.js";
import Order from "../model/order.model.js";
import User from "../model/user.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const cartItems = req.user.cartItems || [];
    const productIds = cartItems.map((item) => item._id);
    const products = await Product.find({ _id: { $in: productIds } });
    const cartDetails = cartItems
      .map((cartItem) => {
        const product = products.find(
          (prod) => prod._id.toString() === cartItem._id.toString()
        );
        if (!product) return null;

        return {
          ...product.toObject(),
          quantity: cartItem.quantity,
        };
      })
      .filter((item) => !!item);

    // 4. Respond with the merged data
    return res.json(cartDetails);
  } catch (error) {
    console.log("Error in getAllProducts controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = req.user;

    const existingItem = user.cartItems.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1; // id the user already has the product then +1
    } else {
      user.cartItems.push(productId);
    }

    await user.save();
    res.json(user.cartItems);
  } catch (error) {
    console.log("Error in addToCart controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const removeAllFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const user = req.user;
    if (!productId) {
      user.cartItems = [];
    } else {
      user.cartItems = user.cartItems.filter((item) => item.id !== productId);
    }

    await user.save(); // save the user back to DB:
    res.json(user.cartItems);
  } catch (error) {
    console.log("Error in removeAllFromCart CONTROLLER. ");
    res.status(500).json({ error: error.message });
  }
};

// export const updateQuantity = async (req, res) => {
//   try {
//     const { quantity, productId } = req.body;
//     const user = req.user;

//     // Use .find() to locate the item in the array by its ID
//     const existingItem = user.cartItems.find(
//       (item) => item.productId && item.productId.toString() === productId
//     );

//     if (existingItem) {
//       if (quantity === 0) {
//         // Correctly remove the item if quantity is 0
//         user.cartItems = user.cartItems.filter(
//           (item) => item.productId && item.productId.toString() !== productId
//         );
//         await user.save();
//         return res.json(user.cartItems);
//       }

//       existingItem.quantity = quantity;
//       await user.save();
//       return res.json(user.cartItems);
//     } else {
//       res.status(404).json({ message: "Product not found in cart" });
//     }
//   } catch (error) {
//     console.error("Error in updateQuantity controller:", error.message);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };
export const updateQuantity = async (req, res) => {
  try {
    const { quantity, productId } = req.body;
    const user = req.user;

    // Use .find() to locate the item in the array by its ID
    const existingItem = user.cartItems.find(
      (item) => item.productId && item.productId.toString() === productId
    );

    if (existingItem) {
      if (quantity === 0) {
        // Correctly remove the item if quantity is 0
        user.cartItems = user.cartItems.filter(
          (item) => item.productId && item.productId.toString() !== productId
        );
        await user.save();
        return res.json(user.cartItems);
      }

      existingItem.quantity = quantity;
      await user.save();
      return res.json(user.cartItems);
    } else {
      res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error("Error in updateQuantity controller:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// technically this should be in the ORder manager:-> but fuck it
// this will create a new order for the user and empty the cartItems array :
export const createOrder = async (req, res) => {
  try {
    // 1. add in the Orders of the USER
    const user = req.user;
    const order = await Order.create({
      userId: user._id,
      products: user.cartItems,
      status: "pending",
    });
    await emptyCart(user);
    user.orders.push(order._id); // later map to get the details of the Actual Order
    // user can Have multiple set of orders in the hood and can view them at times as plese

    await user.save();
    await order.save();
    console.log("Order created successfully", order);
    console.log("User cart emptied successfully", user.cartItems, user.orders);
    return res.status(201).json(order);
  } catch (error) {
    console.log("Error in createOrder controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
const emptyCart = async (user) => {
  try {
    user.cartItems = [];
    await user.save();
  } catch (error) {
    console.log("Error in emptyCart function", error.message);
  }
};
