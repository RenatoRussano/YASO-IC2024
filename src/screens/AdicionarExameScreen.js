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
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AdicionarExameScreen({ navigation}) {


  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
            <Ionicons name="arrow-back" size={20} color="purple" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Adicionar um novo exame</Text>

        <Text style={styles.inputLabel}>Nome do exame</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
        />

        <Text style={styles.inputLabel}>Tipo de exame</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o tipo"
        />

        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Médico solicitante</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o médico"
            />
        </View>

        <Text style={styles.inputLabel}>Descrição do exame</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a descrição"

        />
        </View>

        <Text style={styles.inputLabel}>Imagens do exame</Text>
        <TouchableOpacity style={styles.imageContainer}>
          
            <Image  style={styles.image} />
        
            <Ionicons name="camera" size={50} color="gray" />
          
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton}>
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
