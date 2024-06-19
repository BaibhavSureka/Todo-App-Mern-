import taskModel from "../models/taskModel.js";
import userModel from "../models/userModel.js";

const removeTask = (req, res) => {
  const { id } = req.params; // Retrieve id from request parameters
  taskModel
    .findByIdAndDelete(id)
    .then(() => res.status(200).json({ message: "Task deleted successfully" }))
    .catch((error) => res.status(500).json({ message: error.message }));
};

const addTask = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id;

  const newTask = new taskModel({
    title,
    description,
    completed: false,
    userId,
  });

  try {
    await newTask.save();
    return res.status(200).json({ message: "Task added successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const markDone = async (req, res) => {
  const { id } = req.params; // Retrieve id from request parameters
  try {
    const updatedTask = await taskModel.findByIdAndUpdate(
      id,
      { completed: true }, // Update completed field to true
      { new: true } // Return the updated document
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTask = (req, res) => {
  taskModel
    .find({ userId: req.user.id })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: error.message }));
};

export { addTask, getTask, removeTask, markDone };
