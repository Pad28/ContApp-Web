import { Route, Routes } from "react-router-dom";
import { LoginScreenProfes, RegisterStudentScreen, SendEmailScreen } from "./pages"
import { AlumnosClaseProfe } from "./pages/profes/AlumnosEnClaseProfes";
import { AvancesAlumnosProfe } from "./pages/profes/AvanceAlumnoProfes";
import { PublicarProfes } from "./pages/profes/PublicarProfes";
import { QuizProfes } from "./pages/profes/QuizProfes";
import { SettingsProfes } from "./pages/authProfe/SettingsProfess";
import { RecuperarContraProfes } from "./pages/auth/RecuperarContraseña";
import { CrearQuizProfes } from "./pages/profes/CrearQuizzProfe";
import { HomeScreenAdmin } from "./pages/admin/HomeScreenAdmin";
import { CrearProfeAdmin } from "./pages/admin/CrearProfesorAdmin";
import { ModificarProfeAdmin } from "./pages/admin/ModificarProfesorAdmin";
import { GruposScreenAdmin } from "./pages/admin/GruposAdmin";
import { CrearGrupoAdmin } from "./pages/admin/CrearGruposAdmin";
import { ModificarGrupoAdmin } from "./pages/admin/ModificarGruposAdmin";
import { SettingsAdmin } from "./pages/admin/SettingsAdmin";
import { AvanceAlumno } from "./pages/profes/AvanceAlumno";
import { PrivateRoute } from "./components";
import { LocalStorageKeys } from "./providers/LocalStorage";
import { LoginResponse } from "./interfaces/LoginResponse";

export const App = () => {
  const json = localStorage.getItem(LocalStorageKeys.USER_DATA);
  const { user } = (json)
    ? JSON.parse(json) as LoginResponse
    : {} as LoginResponse;

  const onlyProfesor = () => user.rol == "PROFESOR";
  const onlyAdmin = () => user.rol == "ADMIN";

  return (
    <div>
      <Routes>
        {/* Rutas publicas */}
        <Route path="/forgot-password" element={<RecuperarContraProfes />} />
        <Route path="/login" element={<LoginScreenProfes />} />
        <Route path="/send-email" element={<SendEmailScreen />} />
        <Route path="/register/:token" element={<RegisterStudentScreen />} />

        {/* Rutas de profesor */}
        <Route path="/inicio-profesor" element={
          <PrivateRoute children={<AvancesAlumnosProfe />} filter={onlyProfesor} />
        } />
        <Route path="/alumnos-en-clase-profes/:grupo" element={
          <PrivateRoute children={<AlumnosClaseProfe />} filter={onlyProfesor} />
        } />
        <Route path="/avances-alumnos-profes" element={
          <PrivateRoute children={<AvancesAlumnosProfe />} filter={onlyProfesor} />
        } />
        <Route path="/publicar-profes" element={
          <PrivateRoute children={<PublicarProfes />} filter={onlyProfesor} />
        } />
        <Route path="/quiz-profes" element={
          <PrivateRoute children={<QuizProfes />} filter={onlyProfesor} />
        } />
        <Route path="/settings-profes" element={
          <PrivateRoute children={<SettingsProfes />} filter={onlyProfesor} />
        } />
        <Route path="/crear-quiz-profes" element={
          <PrivateRoute children={<CrearQuizProfes />} filter={onlyProfesor} />
        } />
        <Route path="/avance-alumno/:matricula" element={
          <PrivateRoute children={<AvanceAlumno />} filter={onlyProfesor} />
        } />

        {/* Rutas de admin */}
        <Route path="/inicio-admin" element={
          <PrivateRoute children={<HomeScreenAdmin />} filter={onlyAdmin} />
        } />
        <Route path="/crear-profe-admin" element={
          <PrivateRoute children={<CrearProfeAdmin />} filter={onlyAdmin} />
        } />
        <Route path="/modificar-profe-admin" element={
          <PrivateRoute children={<ModificarProfeAdmin />} filter={onlyAdmin} />
        } />
        <Route path="/grupos-admin" element={
          <PrivateRoute children={<GruposScreenAdmin />} filter={onlyAdmin} />
        } />
        <Route path="/crear-grupos-admin" element={
          <PrivateRoute children={<CrearGrupoAdmin />} filter={onlyAdmin} />
        } />
        <Route path="/modificar-grupos-admin" element={
          <PrivateRoute children={<ModificarGrupoAdmin />} filter={onlyAdmin} />
        } />
        <Route path="/settings-admin" element={
          <PrivateRoute children={<SettingsAdmin />} filter={onlyAdmin} />
        } />

        <Route path="*" element={<h1>404 | Not found <div style={{ height: '28rem' }} /> </h1>} />
      </Routes>
    </div>
  )
}
