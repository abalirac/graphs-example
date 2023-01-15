import { Routes, Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import SimulationDetails from './pages/Simulation/SimulationDetails/SimulationDetails';
import SimulationList from './pages/Simulation/SimulationList/SimulationList';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="simulation" element={<SimulationList />} />
          <Route path="/simulation/:id" element={<SimulationDetails />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
  );
}

export default App;