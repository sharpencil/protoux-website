import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import JsonLd from './components/analytics/JsonLd'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import Pricing from './pages/Pricing'
import TForceLogisticsPage from './pages/TForceLogisticsPage'
import About from './pages/About'
import Start from './pages/Start'
import Thanks from './pages/Thanks'
import Insights from './pages/Insights'
import Article from './pages/Article'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app flex flex-col min-h-screen">
        <JsonLd /> {/* Global Structured Data */}
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/tforce-logistics" element={<TForceLogisticsPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<Article />} />
            <Route path="/start" element={<Start />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </main>
        <Footer />
      </div >
    </Router >
  )
}

export default App
