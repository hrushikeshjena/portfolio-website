import { useState } from 'react';
import Home from './components/Home';
import ModalSection from './components/ModalSection';

const App = () => {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <ModalSection closeModal={closeModal} />
      ) : (
        <Home />
      )}
    </>
  );
};

export default App;
