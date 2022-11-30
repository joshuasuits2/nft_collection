import { useEffect, useState } from "react";
import { AuthProvider } from "./config/auth-context";
import AuthUser from "./config/AuthUser";
import RoutesConfig from "./config/RoutesConfig";
const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <RoutesConfig></RoutesConfig>
      </AuthProvider>
    </div>
  );
};

export default App;
