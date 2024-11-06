import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz';
import QuizReview from './components/QuizReview';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/quiz-review" element={<QuizReview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
