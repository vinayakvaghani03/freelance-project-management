const ProjectModel = require("../models/project");

const addProject = async (req,res)=>{
    
    const {title,duedate,amount,status,payment}=req.body;

    if(!title || !duedate || !amount ){
        res.json({message : "Required fields can't be empty"})
    }

    const newProject = await ProjectModel.create({
        title,duedate,amount,status,payment
    })
    return res.json(newProject);
}

const getProjects = async(req,res)=>{
    const projects = await ProjectModel.find()
    return res.json(projects);
}

const deleteProject = async (req, res) => {
    try {
        // Attempt to delete the project based on its ID
        const deletedProject = await ProjectModel.findOneAndDelete({ _id: req.params.id });

        // If the project doesn't exist
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }

        // If deletion is successful, send a success response
        return res.status(200).json({ message: 'Project deleted successfully', deletedProject });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'An error occurred while deleting the project' });
    }
};
module.exports = {addProject , getProjects, deleteProject};