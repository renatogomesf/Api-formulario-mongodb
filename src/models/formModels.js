import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },

    sobrenome: {
        type: String,
        require: true
    },

    dataNascimento: {
        type: String,
        require: true
    },

    telefone: {
        type: Number,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    }
})

const Form = mongoose.model("Form",formSchema)

export default Form
