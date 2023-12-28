import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../componentes/Titulo";

export default function Perfil(){
    return(
       <ScrollView flex={1}>
        <VStack flex={1} alignItems="center" p={5}>
            <Titulo color="blue.500">Meu Perfil</Titulo>
            <Avatar size="xl" source={{uri: "https://avatars.githubusercontent.com/u/90799993?v=4"}} mt={5} />
            <Titulo color="blue.500">Informações pessoais</Titulo>
            <Titulo fontSize="lg" mb={1}>Fernanda Santos</Titulo>
            <Text>01/01/2001</Text>
            <Text>Recife</Text>
            <Divider mt={5}/>
            <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
            <Text>Bronquite</Text>
            <Text>Sinusite</Text>
        </VStack>
       </ScrollView>
    )
}