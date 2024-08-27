import { Route, Routes } from "react-router-dom";
import { LoginScreenProfes, RegisterStudentScreen, SendEmailScreen } from "./pages"
import { HomeScreen } from "./pages/auth/HomeScreen";
import { HomeScreenProfes } from "./pages/authProfe/HomeScreenProfes";
import { AlumnosClaseProfe } from "./pages/profes/AlumnosEnClaseProfes";
import { AvancesAlumnosProfe } from "./pages/profes/AvanceAlumnoProfes";
import { PublicarProfes } from "./pages/profes/PublicarProfes";
import { QuizProfes } from "./pages/profes/QuizProfes";
import { SettingsProfes } from "./pages/authProfe/SettingsProfess";
import { RecuperarContraProfes } from "./pages/auth/RecuperarContraseña";
import { CrearQuizProfes } from "./pages/profes/CrearQuizzProfe";
// import { Header } from "./components";

export const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/forgot-password" element={<RecuperarContraProfes/>}/>
        <Route path="/login" element={<LoginScreenProfes />} />
        <Route path="/inicio" element={<HomeScreen />} />
        <Route path="/send-email" element={<SendEmailScreen />} />
        <Route path="/inicio-profesor" element={<HomeScreenProfes/>} />
        <Route path="/alumnos-en-clase-profes" element={<AlumnosClaseProfe/>}/>
        <Route path="/avances-alumnos-profes" element={<AvancesAlumnosProfe/>} />
        <Route path="/publicar-profes" element={<PublicarProfes/>} />
        <Route path="/quiz-profes" element={<QuizProfes/>} />
        <Route path="/settings-profes" element={<SettingsProfes/>} />
        <Route path="/register/:token" element={<RegisterStudentScreen />} />
        <Route path="/crear-quiz-profes" element={<CrearQuizProfes/>}/>
        <Route path="*" element={<h1>404 | Not found <div style={{ height: '28rem' }} /> </h1>} />
      </Routes>
    </div>
  )
}
