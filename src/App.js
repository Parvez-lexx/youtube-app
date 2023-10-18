import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SearchPage from './components/SearchPage';
import RecommendedVideos from './components/RecommendedVideos';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route
          path="/search/:searchTerm"
            element={
              <div className='app_page'>
                <Sidebar />
                <SearchPage />
              </div>
            }
          >
          </Route>
        </Routes>
        <Routes>
          <Route path="/" 
            element={
            <div className='app_page'>
              <Sidebar />
              <RecommendedVideos />
            </div>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
