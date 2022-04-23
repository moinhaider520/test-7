import './App.css';
import Home from './pages/home';
import Races from './pages/races';
import {BrowserRouter,Route,Routes,} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route>
          <Route index element={<Home />} />
          {/* <Route path="story" element={<Story />} /> */}
          <Route path="races" element={<Races />} />
          {/* <Route path="roadmap" element={<Roadmap />} /> */}
          {/* <Route path="utilities" element={<Utilities />} /> */}
          {/* <Route path="melian" element={<MELIAN />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
