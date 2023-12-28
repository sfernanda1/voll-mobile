import { VStack, Box, ScrollView } from "native-base";
import { Botao } from "../componentes/botao";
import { CardConsulta } from "../componentes/cardConsulta";
import { EntradaDeTexto } from "../componentes/entradaDeTexto";
import { Titulo } from "../componentes/Titulo";

export default function Explorar(){
  return(
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} alignItems="flex-start" justifyContent="flex-start" p={5}>
        <Box w="100%" borderRadius="lg" p={3} mt={5} shadow="1" borderRightRadius="md">
          <EntradaDeTexto
            placeholder="Digite a especialidade"
          />
          <EntradaDeTexto
            placeholder="Digite sua localização"
          />
          <Botao mt={3} mb={3}>
            Buscar
          </Botao>
        </Box>

        <Titulo color="blue.500" alignSelf="center">Resultado da Busca</Titulo>
        {[1, 2, 3].map((_, index) => (
          <VStack flex={1} w="100%" alignItems="flex-start" bgColor="white" key={index}>
            <CardConsulta 
              especialidade="Cardiologia"
              foto="https://avatars.githubusercontent.com/u/90799993?v=4"
              nome="Dra. Marisa"
            />
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  )
}