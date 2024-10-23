import { StyleSheet, View, ScrollView, TextInput, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Ionicons } from '@expo/vector-icons';

export default function AdicionarConsultaScreen({ navigation }) {

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

        <Text style={styles.inputLabel}>Data da consulta</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a data"
    
        />

        <Text style={styles.inputLabel}>Hora da consulta</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a hora"
        />

        <Text style={styles.inputLabel}>Endereço da consulta</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o endereço"
        />


        <Text style={styles.inputLabel}>Médico da consulta</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o médico"
        />

        <Text style={styles.inputLabel}>CRM</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o CRM"
        />

        <Text style={styles.inputLabel}>Especialidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a Especialidade"
        />

        <Text style={styles.inputLabel}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o telefone"
        />

        <Text style={styles.inputLabel}>Descrição</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a Descrição"
        />


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
