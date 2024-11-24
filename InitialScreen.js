import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function InitialScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#4F8FCB', '#0083F1', '#01001E']}
      style={styles.container}
    >
      {/* Logo superior esquerdo */}
      <Image source={require('../Hackatoon/image/alerta.png')} style={styles.logoLeft} />

      {/* Logo superior direito */}
      <Image source={require('../Hackatoon/image/user2.png')} style={styles.logoRight} />

      {/* Botão Sair no canto inferior esquerdo */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HomeScreen')}
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>

      {/* Imagem da sirene no canto inferior direito */}
      <View style={styles.imageContainer}>
        <Image source={require('../Hackatoon/image/Group 8.png')} style={styles.imageBottom} />
        <Image source={require('../Hackatoon/image/sirene.png')} style={styles.imageSirene} />
      </View>

      {/* 6 Quadrados organizados em 2 colunas e 3 linhas */}
      <View style={styles.squareContainer}>
        {/* Primeiro quadrado */}
        <View style={styles.square}>
          <Image source={require('../Hackatoon/image/image 2.png')} style={styles.squareImage} />
          <Text style={styles.squareTitle}>Mapa</Text>
          <Text style={styles.squareDescription}>Mapa interativo e áreas de risco</Text>
        </View>

        {/* Segundo quadrado */}
        <View style={styles.square}>
          <Image source={require('../Hackatoon/image/image 14.png')} style={styles.squareImage} />
          <Text style={styles.squareTitle}>Ocorrências</Text>
          <Text style={styles.squareDescription}>Como registrar e informações</Text>
        </View>

        {/* Terceiro quadrado */}
        <View style={styles.square}>
          <Image source={require('../Hackatoon/image/image 1.png')} style={styles.squareImage} />
          <Text style={styles.squareTitle}>Ferramentas</Text>
          <Text style={styles.squareDescription}>Vídeos, minicursos e jogos</Text>
        </View>

        {/* Quarto quadrado */}
        <View style={styles.square}>
          <Image source={require('../Hackatoon/image/image 7.png')} style={styles.squareImage} />
          <Text style={styles.squareTitle}>Comunicação</Text>
          <Text style={styles.squareDescription}>Envio de sugestões e feedback</Text>
        </View>

        {/* Quinto quadrado */}
        <View style={styles.square}>
          <Image source={require('../Hackatoon/image/image 10.png')} style={styles.squareImage} />
          <Text style={styles.squareTitle}>Estatísticas</Text>
          <Text style={styles.squareDescription}>Estatísticas criminais</Text>
        </View>

        {/* Sexto quadrado */}
        <View style={styles.square}>
          <Image source={require('../Hackatoon/image/image 13.png')} style={styles.squareImage} />
          <Text style={styles.squareTitle}>Suporte</Text>
          <Text style={styles.squareDescription}>Informações sobre a plataforma</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#001496',
    padding: 20,
    position: 'absolute',
    bottom: 20,
    left: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  logoLeft: {
    position: 'absolute',
    top: 20,
    left: 10,
    width: 133,
    height: 54,
  },
  logoRight: {
    position: 'absolute',
    top: 20,
    right: 10,
    width: 49,
    height: 49,
  },
  imageContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  imageBottom: {
    width: 70,
    height: 70,
  },
  imageSirene: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 40,
    height: 40,
  },
  squareContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 50,
    width: '100%',
  },
  square: {
    width: 189,
    height: 157,
    backgroundColor: '#EDEDED',
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
  },
  squareImage: {
    width: 51,
    height: 51,
    marginBottom: 8,
  },
  squareTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  squareDescription: {
    fontSize: 16,
    textAlign: 'center',
  },
});
