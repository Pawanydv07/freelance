const Question = require('../models/Questions');

// Create a new question
exports.createQuestion = async (req, res) => {
    try {
        const { title, statement, question, options, correctAnswerIndex } = req.body;

        // Validate required fields
        if (!title || !statement || !question || !options || correctAnswerIndex === undefined) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newQuestion = new Question({ title, statement, question, options, correctAnswerIndex });
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(500).json({ message: 'Error creating question', error });
    }
};

// Get all questions
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching questions', error });
    }
};

// Get a question by ID
exports.getQuestionById = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.status(200).json(question);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching question', error });
    }
};

// Update a question
exports.updateQuestion = async (req, res) => {
    try {
        const { title, statement, question, options, correctAnswerIndex } = req.body;

        // Validate required fields
        if (!title || !statement || !question || !options || correctAnswerIndex === undefined) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const updatedQuestion = await Question.findByIdAndUpdate(
            req.params.id,
            { title, statement, question, options, correctAnswerIndex },
            { new: true }
        );

        if (!updatedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(500).json({ message: 'Error updating question', error });
    }
};

// Delete a question
exports.deleteQuestion = async (req, res) => {
    try {
        const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
        if (!deletedQuestion) {
            return res.status(404).json({ message: 'Question not found' });
        }
        res.status(200).json({ message: 'Question deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting question', error });
    }
};
