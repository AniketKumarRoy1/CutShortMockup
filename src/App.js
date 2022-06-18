import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StepperComponent from './components/stepper/stepper';
import HomePage from './components/homePage/homePage';
import SecondPage from './components/secondPage/secondPage';
import ThirdPage from './components/thirdPage/thirdPage';
import FourthPage from './components/fourthPage/fourthPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <StepperComponent />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/secondPage" exact element={<SecondPage />} />
          <Route path="/thirdPage" exact element={<ThirdPage />} />
          <Route path="/fourthPage" exact element={<FourthPage/>} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
