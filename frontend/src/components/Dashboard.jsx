
import React, { useEffect, useState } from 'react';
import ProjectForm from './ProjectForm';
import PaymentsList from './PaymentsList';
import { APIUrl } from '../utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Dashboard = () => {

  const [dataproject, setDataproject] = useState([]);
  useEffect(() => {
    fetchProjects()
  }, []);

  const fetchProjects = async () => {
    try {
      const url = `${APIUrl}/product`;
      const response = await fetch(url);
      const result = await response.json();

      console.log('--result', result);
      setDataproject(result);
    } catch (err) {
      console.error(err);
    }
  }
  const addProject = async (data) => {
    try {
      const url = `${APIUrl}/product`;
      const headers = {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Add content-type header
        },
        body: JSON.stringify(data)
      }
      const response = await fetch(url, headers);
      const result = await response.json();

      if (result && result.data) {
        setDataproject((prevData) => [...prevData, result.data]); // Add the new project to the state
      }
    } catch (err) {
      console.log(err);
    }
    fetchProjects()

  };

  const deleteProject = async (id) => {
    try {
        const url = `${APIUrl}/product/${id}`;
        const headers = {
            method: "DELETE"
        }
        const response = await fetch(url, headers);
        
        const result = await response.json();
      
        console.log('--result', result.data);
        setDataproject(result.data);
    } catch (err) {
        console.error(err);
    }
    
}


  return (
    <div className="container  p-4  border border-4 border-black" style={{ backgroundColor: "#CDE8E5", borderRadius: "25px" }}>
      <ToastContainer position="top-center" />
      <h1 className="mt-4 text-primary">Dashboard</h1>
      <ProjectForm addProject={addProject} />

      <div className="row my-4">
        {dataproject.map((project) => (
          <div className="col-md-6 col-lg-4 mb-4" key={project._id}>
            <div className="card h-100 border border-3 border-black">
              <div className="card-body">
                <h5 className="card-title text-success">{project.title}</h5>
                <p className="card-text">Due Date: {project.duedate.slice(0, 10)}</p>
                <p className="card-text">
                  Status:
                  <span className={`badge ${project.status === 'active' ? 'bg-primary' : 'bg-success'}`}>
                    {project.status}
                  </span>
                </p>
                <p className="card-text">Earnings: ${project.amount}</p>
                <button
                  className={`btn ${project.status === 'active' ? 'btn-primary' : 'btn-success'}`}
                  
                >
                  {project.status === 'active' ? 'Active' : 'Completed'}
                </button>
                <button
                  className="btn btn-danger ms-2"
                onClick={()=>deleteProject(project._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-primary">Earnings Overview</h2>
      <p>Total Earnings: </p>
      <PaymentsList project = {dataproject} />
    </div>
  );
};

export default Dashboard;
