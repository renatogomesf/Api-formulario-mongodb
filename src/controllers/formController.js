import formServices from "../services/formServices.js"

class formController{

    ligarServidor(request,response){
        response.status(200).send({
            message: "Servidor rodando!"
        })
    }

    async getAll(request,response){
        try{
            const cadastros = await formServices.getAll()
    
            response.status(200).send(cadastros)
        }
        catch{
            response.status(500).send({error:"Erro de conexão"})
        }
    }


    async find(request,response){
        try{
            const consulta = request.body
    
            const cadastro = await formServices.find(consulta)
    
            response.status(200).send(cadastro)
        }
        catch{
            response.status(500).send({error:"Erro de conexão"})
        }
    }


    async post(request,response){
        try{
            const {nome, sobrenome, dataNascimento, telefone, email} = request.body
    
            if(!nome || !sobrenome || !dataNascimento || !telefone || !email){
                response.status(400).send({message:"Envie todos os campos para ser possível cadastrar"})
            }

            const cadastro = await formServices.post(request.body)

            if(!cadastro){
                return response.status(400).send({message: "Erro ao cadastrar"})
            }

            response.status(201).send({
                message: "Cadastro criado com sucesso",
                cadastro:{
                    id: cadastro._id,
                    nome,
                    sobrenome,
                    dataNascimento,
                    telefone,
                    email
                }
            })
        }
        catch{
            response.status(500).send({error:"Erro de conexão"})
        }
    }


    async patch(request,response){
        try{
            const {nome, sobrenome, dataNascimento, telefone, email} = request.body

            if(!nome && !sobrenome && !dataNascimento && !telefone && !email){
                response.status(400).send({message:"Envie ao menos um campo para ser possível consultar"})
            }

            const id = request.params.id

            await formServices.patch(id,request.body)

            const cadastro = await formServices.getId(id)

            response.status(200).send({
                message: "Cadastro atualizado com sucesso",
                cadastro:{
                    id: cadastro._id,
                    nome,
                    sobrenome,
                    dataNascimento,
                    telefone,
                    email
                }
            })
        }
        catch{
            response.status(500).send({error:"Erro de conexão"})
        }
    }


    async delete(request,response){
        try{
            const id = request.params.id

            const cadastroDeletado = await formServices.del(id)

            response.status(200).send({
                message: "Cadastro exluido com sucesso",
                cadastroDeletado
            })
        }
        catch{
            response.status(500).send({error:"Erro de conexão"})
        }
    }
}

export default new formController()
