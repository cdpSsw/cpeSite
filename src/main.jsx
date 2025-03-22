import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider, createHashRouter } from 'react-router-dom'

// users
import Homepages from './users/Homepages'

const router = createHashRouter([
  { path: '/', element: <Homepages /> },
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
