import { Route, Routes } from "react-router-dom";
import { LoginScreen, RegisterStudentScreen, SendEmailScreen } from "./pages"
import { HomeScreen } from "./pages/auth/HomeScreen";
// import { Header } from "./components";

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/inicio" element={<HomeScreen />} />
        <Route path="/send-email" element={<SendEmailScreen />} />
        <Route path="/register/:token" element={<RegisterStudentScreen />} />
        <Route path="*" element={<h1>404 | Not found <div style={{ height: '28rem' }} /> </h1>} />
      </Routes>
    </div>
  )
}
