import MocksService from "../services/mocks.services.js";

const mockService= new MocksService;

export default class MockControllers{
    constructor(){
        this.mockService = mockService;
    }

    register =async (req, res)=>{
        try{
            const {petscount, userscount}=req.body;
            const dataPets= await this.mockService.petsResgister(petscount);
            const dataUsers= await this.mockService.usersResgister(userscount);
            if (dataPets && dataUsers){
                return res.json('objetos guardados')
            }else{
                return res.json('objetos no guardados')
            }
        }catch(error){
            throw new Error(error);
        }
    }
    getAll= async(req,res) =>{
        try{
            const data= [];
            const datap= await this.mockService.petsResgisterget();
            const datau= await this.mockService.usersResgisterget();
            if (datap && datau){
                data.push(datap,datau);
                res.json(data) 
            }else{
                return res.json("error al obtener objetos")
            }
        }catch(error){
            throw new Error(error)
        }
    }
    pets = async (req,res)=>{
        try{
            const data= await this.mockService.petsResgisterNon();
            res.json(data)
        }catch(error){
            throw new Error(error)
        }
    }
    users = async (req,res)=>{
        try{
            const data= await this.mockService.usersResgisterNon();
            res.json(data)
        }catch(error){
            throw new Error(error)
        }
    }
}

