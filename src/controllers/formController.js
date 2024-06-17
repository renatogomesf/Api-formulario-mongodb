import formServices from "../services/formServices.js"

class formController{

    async getAll(request,response){
        const cadastros = await formServices.getAll()

        response.status(200).send(cadastros)
    }

    async post(request,response){
        try{
            const {nome, sobrenome, dataNascimento, telefone, email} =request.body
    
            if(!nome || !sobrenome || !dataNascimento || !telefone || !email){
                response.status(400).send({message:"Submit all fields for registration"})
            }

            const form = await formServices.post(request.body)

            if(!form){
                return response.status(400).send({message: "Error creating user"})
            }

            response.status(201).send({
                message: "User created successfully",
                user:{
                    id: form._id,
                    nome,
                    sobrenome,
                    dataNascimento,
                    telefone,
                    email
                }
            })
        }
        catch{
            response.status(500).send({error:"Connection error"})
        }
    }
}

export default new formController()