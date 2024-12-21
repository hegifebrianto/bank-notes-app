import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArchivedPage from './pages/ArchivedPage';
import DetailNotesPages from './pages/DetailNotesPages';
function App() {



  return (

    <div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archived" element={<ArchivedPage />} />
        <Route path="/notes/:id" element={<DetailNotesPages />} />

      </Routes>


    </div>
  )
}

export default App
