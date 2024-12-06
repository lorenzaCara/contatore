import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import CounterFour from "./components/CounterFour";
import CounterFive from "./components/CounterFive";
import CounterSix from "./components/CounterSix";

const router = createBrowserRouter([
  {
    path:'/1',
    element: <CounterOne />
  },
  {
    path:'/2',
    element: <CounterTwo />
  },
  {
    path:'/3',
    element: <CounterThree />
  },
  {
    path:'/4',
    element: <CounterFour />
  },
  {
    path:'/5',
    element: <CounterFive />
  },
  {
    path:'/6',
    element: <CounterSix />
  },


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
