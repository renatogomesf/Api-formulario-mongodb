import Form from "../models/formModels.js";

const getAll = () => Form.find()

const post = (body) => Form.create(body)

export default {getAll,post}