import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';

import { Outlet } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <>
    <Header></Header>
    <main className='py-3'>
    <Container>
    <Outlet/>


    </Container>

    </main>
   
    </>
  );
}

export default App;
