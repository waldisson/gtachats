//import liraries ==================================

import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../styles/stylesPc';
// create a component ==============================

const App = () => {
  return (
    <View style={styles.containerPc}>
      <ScrollView>
        <View>
          <Text style={styles.tituloPc}> Computador </Text>

          <Text style={styles.textos}>
            {' '}
            Você terá de ativar o console na tecla ~ e escrever o código
            correspondente. Importante: estes códigos vão desativar a
            possibilidade de você ganhar conquistas e troféus! O melhor é salvar
            sempre o game antes de utilizá-los para poder voltar pegar as suas
            conquistas.
          </Text>

          <Text style={styles.subtitulo}> - Invencibilidade: </Text>
          <Text style={styles.codigos}>PAINKILLER</Text>

          <Text style={styles.subtitulo}> - Vida e colete recarregados: </Text>
          <Text style={styles.codigos}> TURTLE</Text>

          <Text style={styles.subtitulo}>
            {' '}
            - Habilidade especial recarregada:{' '}
          </Text>
          <Text style={styles.codigos}> POWERUP </Text>

          <Text style={styles.subtitulo}> - Mira em câmera lenta </Text>
          <Text style={styles.codigos}> DEADEYE </Text>

          <Text style={styles.subtitulo}> - Bêbado </Text>
          <Text style={styles.codigos}> LIQUOR </Text>

          <Text style={styles.subtitulo}> - Nadar rápido </Text>
          <Text style={styles.codigos}> GOTGILLS </Text>

          <Text style={styles.subtitulo}> - Salto muito alto</Text>
          <Text style={styles.codigos}> HOPTOIT </Text>

          <Text style={styles.subtitulo}> - Correr rápido </Text>
          <Text style={styles.codigos}> CATCHME </Text>

          <Text style={styles.subtitulo}>
            {' '}
            - Skyfall (você é jogado para o céu){' '}
          </Text>
          <Text style={styles.codigos}> SKYFALL </Text>

          <Text style={styles.subtitulo}> - Paraquedas </Text>
          <Text style={styles.codigos}> SKYDIVE </Text>

          <Text style={styles.subtitulo}>
            {' '}
            - Aumentar o nível de Procura (Wanted)
          </Text>
          <Text style={styles.codigos}> FUGITIVE </Text>

          <Text style={styles.subtitulo}>
            {' '}
            - Diminuir o nível de Procura (Wanted){' '}
          </Text>
          <Text style={styles.codigos}> LAWYERUP </Text>

          <Text style={styles.subtitulo}>
            {' '}
            - Todas as armas e suas munições{' '}
          </Text>
          <Text style={styles.codigos}> TOOLUP </Text>

          <Text style={styles.subtitulo}>
            {' '}
            - Ataque corpo a corpo explosivo{' '}
          </Text>
          <Text style={styles.codigos}> HOTHANDS </Text>

          <Text style={styles.subtitulo}> - Balas explosivas </Text>
          <Text style={styles.codigos}> HIGHEX </Text>

          <Text style={styles.subtitulo}> - Balas de fogo </Text>
          <Text style={styles.codigos}> INCENDIARY </Text>

          <Text style={styles.subtitulo}> - Avião Stuntplane</Text>
          <Text style={styles.codigos}> BARNSTORM </Text>

          <Text style={styles.subtitulo}> - Avião Duster </Text>
          <Text style={styles.codigos}> FLYSPRAY </Text>

          <Text style={styles.subtitulo}> - Helicóptero Buzzard</Text>
          <Text style={styles.codigos}> BUZZOFF </Text>

          <Text style={styles.subtitulo}> - Caminhão Trashmaster </Text>
          <Text style={styles.codigos}> TRASHED </Text>

          <Text style={styles.subtitulo}> - Carrinho de golf Caddy </Text>
          <Text style={styles.codigos}> HOLEIN1 </Text>

          <Text style={styles.subtitulo}> - Carro Comet </Text>
          <Text style={styles.codigos}> COMET </Text>

          <Text style={styles.subtitulo}> - Limousine </Text>
          <Text style={styles.codigos}> VINEWOOD </Text>

          <Text style={styles.subtitulo}> - Carro Rapid GT</Text>
          <Text style={styles.codigos}> RAPIDGT </Text>

          <Text style={styles.subtitulo}> - Moto Sanchez </Text>
          <Text style={styles.codigos}> OFFROAD </Text>

          <Text style={styles.subtitulo}> - Moto PCJ-600 </Text>
          <Text style={styles.codigos}> ROCKET </Text>

          <Text style={styles.subtitulo}> - Bicicleta BMX </Text>
          <Text style={styles.codigos}> BANDIT </Text>

          <Text style={styles.subtitulo}> - Mudar o clima </Text>
          <Text style={styles.codigos}> MAKEITRAIN </Text>

          <Text style={styles.subtitulo}> - Mudar a gravidade </Text>
          <Text style={styles.codigos}> FLOATER </Text>

          <Text style={styles.subtitulo}> - Derrapagem de veículos </Text>
          <Text style={styles.codigos}> SNOWDAY </Text>

          <Text style={styles.subtitulo}> - Câmera lenta </Text>
          <Text style={styles.codigos}> SLOWMO </Text>
          <Text style={{marginBottom: 10}}></Text>
        </View>
      </ScrollView>
    </View>
  );
};

//make this component available to the app ===========

export default App;
