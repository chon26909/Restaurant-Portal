import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Input from "./components/Input";
// import router from "./router";
// import MainLayout from "./layouts/MainLayout";

function App() {

  return <div>
    <Input type="text" label={""}/>
    <Input type="password" label={""}/>
  </div>

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       {router.public.map((route) => (
  //         <Route
  //           key={route.path}
  //           path={route.path}
  //           element={<route.element />}
  //         />
  //       ))}

  //       <Route element={<MainLayout />}>
  //         {router.private.map((route) => (
  //           <Route
  //             key={route.path}
  //             path={route.path}
  //             element={<route.element />}
  //           />
  //         ))}
  //       </Route>

  //       <Route index element={<Navigate to="dashboard" />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
