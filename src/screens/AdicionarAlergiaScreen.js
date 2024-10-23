import { useState, useEffect } from 'react';
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

export default function AdicionarAlergiaScreen({ navigation, route }) {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [escala, setEscala] = useState('');
  const [descricao, setDescricao] = useState('');
  const [cuidado, setCuidado] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (route.params?.item) {
      const { nome, tipo, escala, descricao, cuidado, file } = route.params.item;
      setNome(nome);
      setTipo(tipo);
      setEscala(escala);
      setDescricao(descricao);
      setCuidado(cuidado)
      setFile(file);
    }
  }, [route.params?.item]);

  // Pedido de permissão de mídia
  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos da permissão para acessar suas fotos!');
      }
    };
    getPermissions();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFile(result.uri);
    }
  };

  const salvar = () => {
    if (nome && data && hora) {
      const newItem = {
        nome, 
        tipo, 
        escala, 
        descricao, 
        cuidado, 
        file
      };
      alert('CADASTRADO');
      // Navegação opcional
      //navigation.navigate('Vacinas', { newItem });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={20} color="purple" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>adicionar uma nova alergia</Text>

        <Text style={styles.inputLabel}>Nome da alergia</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.inputLabel}>Tipo de alergia</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o tipo"
          value={tipo}
          onChangeText={setTipo}
        />

        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Escala da alergia</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite a escala"
              value={escala}
              onChangeText={setEscala}
            />
        </View>

        <Text style={styles.inputLabel}>Descrição da alergia</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a descrição"
          value={descricao}
          onChangeText={setDescricao}
        />

        <Text style={styles.inputLabel}>Cuidados conhecidos</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite os cuidados"
          value={cuidado}
          onChangeText={setCuidado}
        />


        </View>

        <Text style={styles.inputLabel}>foto da alergia</Text>
        <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
          {file ? (
            <Image source={{ uri: file }} style={styles.image} />
          ) : (
            <Ionicons name="camera" size={50} color="gray" />
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton} onPress={salvar}>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '48%',
  },
  imageContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
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
