import { VStack, Text, Divider, ScrollView } from "native-base";
import { Botao } from "../componentes/botao";
import { CardConsulta } from "../componentes/cardConsulta";
import { Titulo } from "../componentes/Titulo";

export default function Consultas(){
    return(
        <ScrollView p={5}>
            <Text fontWeight="bold" color="blue.500" fontSize="2xl" alignSelf="center">Minhas consultas </Text>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>
            <Text fontWeight="bold" color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas </Text>
            <CardConsulta 
                nome="Dra. Marina"
                especialidade="Cardiologista"
                foto="https://avatars.githubusercontent.com/u/90799993?v=4"
                data="12/12/2023"
                foiAgendado
            />
            <Divider mt={5} />
            <Text fontWeight="bold" color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas Passadas </Text>
            <CardConsulta 
                nome="Dra. Marina"
                especialidade="Cardiologista"
                foto="https://avatars.githubusercontent.com/u/90799993?v=4"
                data="12/12/2023"
                foiAtendido
            />
             <CardConsulta 
                nome="Dra. Marina"
                especialidade="Cardiologista"
                foto="https://avatars.githubusercontent.com/u/90799993?v=4"
                data="12/12/2023"
                foiAtendido
            />
        </ScrollView>
    )
}