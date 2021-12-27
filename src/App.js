import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import DateEvaluation from './component/form.jsx'


function App() {
  return (
  <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <h1 className="header">Questionnaire</h1>
        <DateEvaluation />
      </Container>
    </Container>
  );
}

export default App;
