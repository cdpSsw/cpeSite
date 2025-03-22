import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider, createHashRouter } from 'react-router-dom'

// users
import Homepages from './users/Homepages'
import Contact from './users/pages/Contact'

const router = createHashRouter([
  { path: '/', element: <Homepages /> },
  { path: '/Contact', element: <Contact /> },
]);

const App = () => {
  return(
    <RouterProvider router={router}></RouterProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
