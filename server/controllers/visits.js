import VisitsMessage from "../models/visits.js";

export const getVisits = async (require, response) => {
    try {
        const visitMessage = await VisitsMessage.find();
        response.status(200).json(visitMessage);

    } catch (error) {

        response.status(404).json({ message: error });
    }
}

export const createVisit = async (require, response) => {
    const visit = require.body;

    const newVisitMessage = new VisitsMessage(visit)

    try {
        await newVisitMessage.save()

        response.status(201).json(newVisitMessage)

    } catch (error) {

        response.status(409).json({ message: error.message })
    }
}

export const updateVisit = async (require, response) => {
    const admID = "63c47f0771d7571d98a396fd";

    const visit = require.body;

    if (require.userId === admID) {
        const newVisitMessage = await VisitsMessage.find({ cpf: visit.cpf });

        const updatedVisitMessage = await VisitsMessage.findByIdAndUpdate(newVisitMessage[0]._id, visit, { new: true })

        response.json(updatedVisitMessage)

    } else {
        response.status(401).json({ message: "Unauthorized user." })
    }
}

export const deleteVisit = async (require, response) => {
    const admID = "63c47f0771d7571d98a396fd";

    const visit = require.body;

    if (require.userId === admID) {
        await VisitsMessage.findOneAndDelete({ cpf: visit.cpf })

    } else {
        response.status(401).json({ message: "Unauthorized user." })
    }
}