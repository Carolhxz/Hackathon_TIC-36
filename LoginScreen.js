// LoginScreen.js (Tela de login)
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Para o gradiente de fundo
import { Ionicons } from '@expo/vector-icons'; // Ícones do Expo

export default function LoginScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#4F8FCB', '#0083F1', '#01001E']} // Gradiente de fundo
      style={styles.container}
    >
      <Image 
        source={require('../Hackatoon/image/alerta.png')} // Logo ou imagem de fundo
        style={styles.logo}
      />

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="E-mail"
          placeholderTextColor="#B0B0B0"
          keyboardType="email-address"
        />
        <Ionicons name="person" size={24} color="black" style={styles.icon} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Senha"
          placeholderTextColor="#B0B0B0"
          secureTextEntry 
        />
        <Ionicons name="lock-closed" size={24} color="black" style={styles.icon} />
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('InitialScreen')}  // Navega para a Tela Inicial após o login
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('RegisterScreen')} 
        style={styles.linkContainer}
      >
        <Text style={styles.linkText}>Ainda não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 40,
  },
  inputContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: 20,
  },
  icon: {
    position: 'absolute',
    right: 10,  // Coloca o ícone no final do campo
    top: 12,    // Ajusta a posição vertical do ícone
  },
  input: {
    width: '100%',
    paddingLeft: 5, // Espaço para o ícone na esquerda
    paddingRight: 30, // Espaço para o ícone na direita
    padding: 10,
    color: '#000',  // Texto preto para contraste com o fundo branco
    fontSize: 16,
    borderWidth: 1,  // Define a borda
    borderColor: '#fff',  // Cor da borda
    borderRadius: 25,  // Cantos arredondados
    backgroundColor: '#fff',  // Fundo branco
  },
  button: {
    backgroundColor: '#001496',
    width: '100%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: 20,
  },
  linkText: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
