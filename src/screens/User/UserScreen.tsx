import { View, Text } from 'react-native';

import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';

type UserScreenRouteProps = {
    route: RouteProp<RootStackParamList, "User">
}

export default function UserScreen( {route}: UserScreenRouteProps ) {
    const { username, age, gender, birthDate } = route.params;

    return(
        <View>
            <Text>Bem-vindo: {username}</Text>
            <Text>Idade: {age}</Text>
            <Text>Gênero: {gender}</Text>
            <Text>Data de Nascimento: {birthDate}</Text>
        </View>
    );  
}