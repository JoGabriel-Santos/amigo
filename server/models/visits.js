import mongoose from "mongoose";

const visitsSchema = mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cpf: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    status: { type: String, required: true },
});

let VisitsMessage = mongoose.model("Visits", visitsSchema)

export default VisitsMessage;