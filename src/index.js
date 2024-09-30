import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/home/home';
import Detail from './views/details/details'
import Meeting from './views/meeting/meeting';
import './index.css';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/detail",
    element:<Detail/>,
  },
  {
    path:"/:meetingId",
    element:<Meeting/>
  }
])

root.render(
 <div>
  <h1>
  Advanced Routing
  </h1>
 </div>
);

root.render(<RouterProvider router={router}/>)


