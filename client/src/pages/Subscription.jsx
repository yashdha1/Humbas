import { motion } from "framer-motion";
import ItemSubscribe from "../components/ItemSubscribe.jsx";
import { useParams } from "react-router-dom";
import { useUserStore } from "../store/useUserStore.js";

const Subscription = () => { 
  const {user} = useUserStore();
  const products = [
    {
      _id: 1,
      name: "Milk",
      image:
        "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      price: 70,
      quantity: 1,
    }
  ];
  return (
    <div className="min-h-screen">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          className="text-center text-4xl sm:text-5xl font-bold text-red-600 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SUBSCRIPTION PRODUCTS.  
        </motion.h1>
        <motion.p
          className="text-center text-lg  text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          All the Shown Images are Authentic
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {products?.length === 0 && (
            <h2 className="text-3xl font-semibold text-gray-300 text-center col-span-full">
              No products found
            </h2>
          )}

          {products?.map((p) => (
            <ItemSubscribe product={p} key={p._id} />
          ))}
           
        </motion.div>
      </div>
    </div>
  );
};

export default Subscription;
