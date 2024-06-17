import Form from "../models/formModels.js";

const getAll = () => Form.find()

const find = (consulta) => Form.find(consulta)

const post = (body) => Form.create(body)

export default {getAll, find, post}