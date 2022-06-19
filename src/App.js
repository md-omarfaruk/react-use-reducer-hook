import './App.css';
import ProductCount from './components/ProductCount/ProductCount';
import StudentAdmissionManager from './components/StudentAdmissionManager/StudentAdmissionManager';

function App() {
  return (
    <div className="App">
      <StudentAdmissionManager></StudentAdmissionManager>
      <br/>
      <br/>
      <ProductCount></ProductCount>
    </div>
  );
}

export default App;
