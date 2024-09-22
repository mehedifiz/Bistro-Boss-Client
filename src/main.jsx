import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Authprovider from './firebase/Providers/Authprovider.jsx';
import { ToastContainer } from 'react-toastify';
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query';


const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <div className='max-w-screen-xl mx-auto '>
       <RouterProvider router={router} />

      </div>
      </HelmetProvider>

    </QueryClientProvider>
    
      <ToastContainer />
    </Authprovider>
      </StrictMode>,
)
