import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import './App.css';

const Layout = lazy(() => import('./pages/Layout'));
const Home = lazy(() => import('./pages/Home/Home'));

function App() {
  return (
    <div className='App bg-black md:px-8 lg:px-14 overflow-hidden'>
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