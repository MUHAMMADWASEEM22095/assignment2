import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
import Title from './Components/Title';
import Footer from './Components/Footer';
import Complain from './Components/Complain';
import ComplaintForm from './Components/complaintform';
function App() {
  return (
    <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h2 className="card-title">Complaint Cell</h2>
          </div>
          <div className="card-body">
            <ComplaintForm />
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default App;
