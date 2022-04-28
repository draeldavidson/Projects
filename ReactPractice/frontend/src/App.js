import Form from './components/Form';
import Home from './Home';
import CommentSection from './components/CommentSection/CommentSection';
import AdminComments from './components/CommentSection/AdminComments';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Form' element={<Form />} />
          <Route path='/CommentSection' element={<CommentSection />} />
          <Route path='/AdminComments' element={<AdminComments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
