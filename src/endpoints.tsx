import { Navigate } from "react-router-dom"
import LoginPage from "./routes/LoginPage"
import SignUp from "./routes/SignUp"
import Error from "./routes/Error"
import About from "./routes/Pages/About"
import Oficinas from "./routes/Pages/Oficinas"
import Home from "./routes/Pages/Home"
import OficinaPagamento from "./routes/Pages/OficinaPagamento"


export const endpointsApp = [
   
    {caminho:"/", elemento:<Navigate to='/login' />},
    {caminho:"/login", elemento:<LoginPage />},
    {caminho:"/signup", elemento:<SignUp />}  ,
    {caminho:"*", elemento:<Error />},
    {caminho:"/principal", elemento:<Navigate to="/principal/home/"/>},
    {caminho:"/payment/:id", elemento:<OficinaPagamento />},

    


    
    ]
export const endpointsAppChilds = [
    {caminho:"/principal/about", elemento:<About />},
    {caminho:"/principal/oficinas", elemento:<Oficinas />},
    {caminho:"/principal/home", elemento:<Home />},

]

export const endpointsHome = [
    {caminho:"/principal/home", elemento:<Home />, nome: 'Home'},
    {caminho:"/principal/about", elemento:<About />, nome: 'Sobre nós'},
    {caminho:"/chatbot/oficinas", elemento:<Oficinas />, nome: 'Oficinas'},
    
    // {caminho:"/chatbot", elemento:<Chatbot />, nome: 'LVSBot'},

]
