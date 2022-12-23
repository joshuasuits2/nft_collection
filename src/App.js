import { AuthProvider, useAuthentication } from "./config/auth-context";
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
