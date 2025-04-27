import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

import Risk from './pages/risk/Risk.jsx'
import Strategy from './pages/strategy/Strategy.jsx'
import Trade from './pages/trade/Trade.jsx'
import Copy from './pages/copy/Copy.jsx'
import Bot from './pages/bot/Bot.jsx'
import Bote from './pages/bote/Bote.jsx'
import Charts from './pages/charts/Charts.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "copytrader",
    element: <Copy />
  },
  {
    path: "trading-plan",
    element: <Trade />
  },
  {
    path: "strategies",
    element: <Strategy />
  },
  {
    path: "boteditor",
    element: <Bote />
  },
  {
    path: "charts",
    element: <Charts />
  },
  {
    path: "freebots",
    element: <Bot />
  },
  {
    path: "risk-calculator",
    element: <Risk />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
