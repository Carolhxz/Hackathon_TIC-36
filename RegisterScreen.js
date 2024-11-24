import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function RegisterScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    
    navigation.navigate('HomeScreen'); 
  };

  return (
    <LinearGradient
      colors={['#4F8FCB', '#0083F1', '#01001E']} 
      style={styles.container}
    >
      <Image 
        source={require('../Hackatoon/image/alerta.png')} 
        style={styles.logo}
      />

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome Completo"
          placeholderTextColor="#B0B0B0"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="CPF"
          placeholderTextColor="#B0B0B0"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="E-mail"
          placeholderTextColor="#B0B0B0"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Senha"
          placeholderTextColor="#B0B0B0"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Confirmar Senha"
          placeholderTextColor="#B0B0B0"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleRegister}
      >
        <Text style={styles.buttonText}>Cadastrar  </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate('LoginScreen')} 
        style={styles.linkContainer}
      >
        <Text style={styles.linkText}>Já tem uma conta? Faça login  </Text>
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
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    color: '#000',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 25,
    backgroundColor: '#fff',
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
