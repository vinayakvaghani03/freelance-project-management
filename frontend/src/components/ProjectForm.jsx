import React, { useState } from 'react';

const ProjectForm = ({ addProject }) => {

  const [productInfo, setProductInfo] = useState({ title : '',duedate : '',amount : '',status : 'Active',payment : 'Pending'})

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyProductInfo = { ...productInfo };
    copyProductInfo[name] = value;
    setProductInfo(copyProductInfo);
    console.log(productInfo);
    
}
const addProducts = (e) => {
  e.preventDefault();
  
  addProject(productInfo);
  setProductInfo({ title: '', duedate :"", amount : "Active", status : "Pending" })
}

  return (
    <form onSubmit={addProducts} className="mb-4" >
      <div className="mb-3">
        <label className="form-label">Project Name</label>
        <input
          type="text"
          className="form-control"
          value={productInfo.title}
          name ='title'
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Due Date</label>
        <input
          type="date"
          className="form-control"
          value={productInfo.duedate}
          name ='duedate'
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Payment Amount</label>
        <input
          type="number"
          className="form-control"
          value={productInfo.amount}
           name ='amount'
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Status</label>
        <select
          className="form-select"
          value={productInfo.status}
          name='status'
          onChange={handleChange}
        >
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;
