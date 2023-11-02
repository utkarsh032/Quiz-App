import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Main from './components/Main/Main';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';

const router = createBrowserRouter([
  { path: '/', element: <Main></Main> },
  { path: '/quiz', element: <Quiz></Quiz> },
  { path: '/result', element: <Result></Result> }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
