
import React from 'react'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Herosection from './components/herosection/Herosection'
import Navbar from './components/Navbar/Navbar'
import ProjectsList from './components/projects/ProjectsList'
import Skills from './components/skills/Skills'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <About/>
      <Skills/>
      <ProjectsList/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
