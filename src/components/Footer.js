import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native'; // Adicione o Image aqui

const Footer = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openConfigModal = () => {
    setModalVisible(true);
  };

  const closeConfigModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button}>
              <Image
            source={{ uri: 'https://i.ibb.co/16GqcWc/pessoa.png' }} 
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Image
            source={{ uri: 'https://i.ibb.co/MGmJnMW/folha.png' }} 
        />
      
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <Image
            source={{ uri: 'https://i.ibb.co/T2Hn4zq/home.png' }} 
        />
      
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image
            source={{ uri: 'https://i.ibb.co/HN1BGCy/chave.png' }} 
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openConfigModal}>
      <Image
            source={{ uri: 'https://i.ibb.co/XJPLLv6/menu-more.png' }} 
        />
      </TouchableOpacity>

      {/* Modal de Configurações */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeConfigModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => alert('Segurança e privacidade')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Segurança e privacidade</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Dispositivos')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Dispositivos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Permissões')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Permissões</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Meu perfil')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Meu perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Notificações')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Notificações</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('Configurações')} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Configurações</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={closeConfigModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    width: '100%',
    position: 'absolute', 
    bottom: 0,
  },
  button: {
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalButton: {
    backgroundColor: '#6A1B9A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    color: 'red',
  },
});

export default Footer;
