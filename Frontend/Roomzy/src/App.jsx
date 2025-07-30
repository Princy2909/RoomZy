import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body/Body";
import LoginScreen from "./components/loginScreen/LoginScreen";
import SignupScreen from "./components/SignupScreen/SignupScreen";
import OtpSender from "./components/OtpSender/OTPSender"; // Make sure this file exists
import Listing from "./components/Listing/listing2";
import Review from "./components/reviewScreen/Review";
import Notification from "./components/notificationCenter/NotificationCenter";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<div>Base Page</div>} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/body" element={<Body />} />
        <Route path="/otp" element={<OtpSender />} /> {/* ✅ Added OTP route */}
        <Route path="/listing" element={<Listing />} />
         <Route path="/review" element={<Review />} />
         <Route path="/notification" element={<Notification/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

