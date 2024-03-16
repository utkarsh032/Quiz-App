import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Main from './components/Main/Main';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';
import { CheckUserExist } from './helper/helper';
import ResultPart from './components/Result/ResultPart';


const router = createBrowserRouter([
  { path: '/', element: <Main></Main> },
  { path: '/quiz', element: <CheckUserExist><Quiz /></CheckUserExist> },
  { path: '/result', element: <CheckUserExist><Result /></CheckUserExist> }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
