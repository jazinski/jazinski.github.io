import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import HomeMockup1 from './pages/Home-Mockup1.tsx'
import HomeMockup2 from './pages/Home-Mockup2.tsx'
import HomeMockup3 from './pages/Home-Mockup3.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import Skills from './pages/Skills.tsx'
import Services from './pages/Services.tsx'
import Contact from './pages/Contact.tsx'
import NotFound from './pages/NotFound.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="mockup1" element={<HomeMockup1 />} />
          <Route path="mockup2" element={<HomeMockup2 />} />
          <Route path="mockup3" element={<HomeMockup3 />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)