
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Component/Layout';
import NoPage from './pages/NoPage';
import Aboutus from './pages/Aboutus';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Question from './pages/Question';
import Action from './pages/Action';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="service" element={<Service />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="team" element={<Team />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="question" element={<Question />} />
          <Route path="action" element={<Action />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
