import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import './App.css';
import Aos from 'aos';

const Layout = lazy(() => import('./pages/Layout'));
const Home = lazy(() => import('./pages/Home'));

function App() {
  useEffect(() => {
    Aos.init();
  })
  return (
    <div className='App bg-black md:px-8 lg:px-14 2xl:px-[10%] overflow-hidden'>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;