import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Homepage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ItemsPage from "./pages/ItemsPage.jsx";
import Profile from "./pages/Profile.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import Subscription from "./pages/Subscription.jsx"; 
import SubscriptionFloater from "./components/SubscriptionFloater.jsx";
// import { useUserStore } from "./store/useUserStore.jsx";

function App() {
  // const { user } = useUserStore();
  const user = true;

  return (
    <div>
      <div className="">
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/signup" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/login" />}
          /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/items/:id" element={<ItemsPage />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/dashboard" element={<AdminPage />} />
          <Route path="/subscriptions" element={<Subscription />} />
          <Route path="/subscriptions/:name" element={<SubscriptionFloater/>} />

        </Routes>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
