import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

import { Main } from './components/Main/Main';
import { useRef } from 'react';

function App() {
 return (
  <>
   <ReactLenis
    options={{
     lerp: 500.1,
     prevent: (node) => node.classList.contains('political'),
    }}
    root
   >
    <Header />
    <Main />
    <Footer />
   </ReactLenis>
  </>
 );
}

export default App;
