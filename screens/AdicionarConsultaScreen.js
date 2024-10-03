import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AdicionarConsultaScreen({ navigation, route }) {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [consultorio, setConsultorio] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [imagem, setImagem] = useState(null);

  useEffect(() => {
    if (route.params?.item) {
      const { nome, categoria, consultorio, data, hora, endereco, contato, observacoes, imagem } = route.params.item;
      setNome(nome);
      setCategoria(categoria);
      setConsultorio(consultorio);
      setData(data);
      setHora(hora);
      setEndereco(endereco);
      setContato(contato);
      setObservacoes(observacoes);
      setImagem(imagem);
    }
  }, [route.params?.item]);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos da permissão da câmera para isso funcionar!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  const salvarConsulta = () => {
    if (nome && categoria && consultorio && data && hora) {
      const newItem = {
        id: route.params?.item?.id || Date.now(),
        nome,
        categoria,
        consultorio,
        data,
        hora,
        endereco,
        contato,
        observacoes,
        imagem,
      };
      console.log('Salvando consulta:', newItem); 
      navigation.navigate('Consultas', { newItem, isConsulta: true });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.iconRow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconButton}>
            <Ionicons name="arrow-back" size={20} color="purple" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search-outline" size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>adicionar uma nova consulta</Text>

        <Text style={styles.inputLabel}>Categoria</Text>
        <TextInput
          style={styles.input}
          placeholder="Pediatria"
          value={categoria}
          onChangeText={setCategoria}
        />

        <Text style={styles.inputLabel}>Nome do local / especialista</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome do Médico(a)"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.inputLabel}>Local</Text>
        <TextInput
          style={styles.input}
          placeholder="Consultório do(a) médico(a)"
          value={consultorio}
          onChangeText={setConsultorio}
        />

        <Text style={styles.inputLabel}>Data</Text>
        <TextInput
          style={styles.input}
          placeholder="23/09/2024"
          value={data}
          onChangeText={setData}
        />

        <Text style={styles.inputLabel}>Hora</Text>
        <TextInput
          style={styles.input}
          placeholder="06:30"
          value={hora}
          onChangeText={setHora}
        />

        <Text style={styles.inputLabel}>Endereço</Text>
        <TextInput
          style={styles.input}
          placeholder="Rua Tonelero 280, CJ24, Vila Ipojuca - São Paulo SP"
          value={endereco}
          onChangeText={setEndereco}
          multiline
        />

        <Text style={styles.inputLabel}>Contato</Text>
        <TextInput
          style={styles.input}
          placeholder="11 9 8701 3258"
          value={contato}
          onChangeText={setContato}
        />

        <Text style={styles.inputLabel}>Observações</Text>
        <TextInput
          style={styles.input}
          placeholder="Observações"
          value={observacoes}
          onChangeText={setObservacoes}
          multiline
        />

        <Text style={styles.inputLabel}>Foto</Text>
        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          <Ionicons name="camera" size={24} color="white" />
          <Text style={styles.imagePickerText}> Tirar Foto</Text>
        </TouchableOpacity>

        {imagem && <Image source={{ uri: imagem }} style={styles.image} />}

        <TouchableOpacity style={styles.saveButton} onPress={salvarConsulta}>
          <Text style={styles.saveButtonText}>salvar</Text>
        </TouchableOpacity>
        
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: -10, 
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'purple',
    marginBottom: 20,
    marginTop: 20, 
  },
  inputLabel: {
    fontSize: 14,
    color: 'purple',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    fontSize: 14,
    color: '#333',
  },
  imagePicker: {
    flexDirection: 'row',
    backgroundColor: 'purple',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  imagePickerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: 'purple',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
