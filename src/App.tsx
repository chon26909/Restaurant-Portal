import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import router from "./router";
import MainLayout from "./layouts/MainLayout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {router.public.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}

          <Route>
             <Route element={<MainLayout />}>
                {router.private.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                  />
                ))}
              </Route>
              <Route index element={<Navigate to="dashboard" />} />
          </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
