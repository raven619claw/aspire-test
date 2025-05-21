import { NavigationHOC } from "./containers/Navigation";
import { AppContainer } from "./AppStyles";
import { AppRoutes } from "./containers/routes";
import MobileBlockOverlay from "./components/MobileView";

const App = () => (
  <AppContainer>
    <MobileBlockOverlay/>
    <NavigationHOC />
    <AppRoutes />
  </AppContainer>
);

export default App;
