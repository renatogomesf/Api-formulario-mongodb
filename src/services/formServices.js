import Form from "../models/formModels.js";

const getAll = () => Form.find()

const find = (consulta) => Form.find(consulta)

const post = (body) => Form.create(body)

const patch = (id,body) => Form.findByIdAndUpdate(id,body)
const getId = (id) => Form.findById(id)

export default {getAll, find, post, patch, getId}
