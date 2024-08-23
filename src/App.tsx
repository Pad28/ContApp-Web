import { Route, Routes } from "react-router-dom";
import { RegisterStudentScreen, SendEmailScreen } from "./pages"
// import { Header } from "./components";

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/send-email" element={<SendEmailScreen />} />
        <Route path="/register/:token" element={<RegisterStudentScreen />} />
        <Route path="*" element={<h1>404 | Not found <div style={{ height: '28rem' }} /> </h1>} />
      </Routes>
    </div>
  )
}
