import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import { Picker } from '@react-native-picker/picker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, "Home">
}

export default function HomeScreen( { navigation }: HomeScreenProps ) {

    const [ inputName, setInputName ] = useState('');
    const [ inputAge, setInputAge ] = useState('');
    const [ inputGender, setInputGender ] = useState('');
    const [ birthDate, setBirthDate ] = useState<Date | null>(null);

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('pt-BR');
    };

    const openDatePicker = () => {
        DateTimePickerAndroid.open({
            value: birthDate ?? new Date(),
            onChange: (event, selectedDate) => {
                if (event.type === 'set' && selectedDate) {
                    setBirthDate(selectedDate);
                }
            },
            mode: 'date',
            is24Hour: true,
        });
    };

    const navigateToUserScreen = () => {
        navigation.navigate("User", { 
            username: inputName,
            age: inputAge,
            gender: inputGender,
            birthDate: birthDate ? formatDate(birthDate) : '' });
    }

    return(
        <View style={styles.container}>
            <TextInput
                style={styles.field}
                placeholder='Digite o seu Nome:'
                value={inputName}
                onChangeText={(text) =>setInputName(text)}
            />
            <TextInput
                style={styles.field}
                placeholder='Digite a sua Idade'
                value={inputAge}
                onChangeText={(text) =>setInputAge(text)}
            />
            <View style={styles.field}>
                <Picker
                    selectedValue={inputGender}
                    onValueChange={(itemValue) =>
                        setInputGender(itemValue)
                    }>
                    <Picker.Item label="Selecione o gênero:" value="" enabled={true} />
                    <Picker.Item label="Masculino" value="Masculino" />
                    <Picker.Item label="Feminino" value="Feminino" />
                    <Picker.Item label="Prefiro não responder" value="Indefinido" />
                </Picker>
            </View>

            <Pressable style={styles.field} onPress={openDatePicker}>
                <Text style={styles.dateButtonText}>
                    {birthDate ? formatDate(birthDate) : 'Selecionar data de nascimento'}
                </Text>
            </Pressable>

            <Button title="Enviar" onPress={navigateToUserScreen} />
        </View>
    )    
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    field: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
        minHeight: 50,
        backgroundColor: '#fff'
    },
    dateButtonText: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        color: '#333'
    }        
})