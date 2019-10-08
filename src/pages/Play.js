//import liraries ==================================
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import styles from '../styles/stylesPlay';

// create a component ==============================

const Play = () => {
  return (
    <View style={styles.containerPlay}>
      <ScrollView>
        <View>
          <Text style={styles.tituloPlay}> Ps3 e Ps4 </Text>

          <Text style={styles.textos}>
            Vale lembrar que, ao ativar os códigos GTA V para conseguir armas
            avançadas e invencibilidade nas missões, você perde a possibilidade
            de conseguir Conquistas ou Troféus no game. Para voltar a
            desbloquear o conteúdo, é necessário carregar um jogo salvo antigo e
            voltar de onde você parou. Além disso, as trapaças serão excluídas
            quando você desligar seu console.
          </Text>

          <Text style={styles.subtitulo}> - Armadura e vida no máximo: </Text>
          <Text style={styles.codigos}>
            Círculo, L1, Triângulo, R2, X, Quadrado, Círculo, Direita, Quadrado,
            L1, L1, L1
          </Text>

          <Text style={styles.subtitulo}> - Ataques explosivos: </Text>
          <Text style={styles.codigos}>
            Direita, Esquerda, X, Triângulo, R1, Círculo, Círculo, Círculo, L2
          </Text>

          <Text style={styles.subtitulo}> - Armas e munição: </Text>
          <Text style={styles.codigos}>
            Triângulo, R2, Esquerda, L1, X, Direita, Triângulo, Baixo, Quadrado,
            L1, L1, L1
          </Text>

          <Text style={styles.subtitulo}> - Aumentar nível de procurado: </Text>
          <Text style={styles.codigos}>
            R1, R1, Círculo, R2, Esquerda, Direita, Esquerda, Direita, Esquerda,
            Direita
          </Text>

          <Text style={styles.subtitulo}> - Correr mais rápido: </Text>
          <Text style={styles.codigos}>
            Triângulo, Esquerda, Direita, Direita, L2, L1, Quadrado
          </Text>

          <Text style={styles.subtitulo}> - Carros deslizando: </Text>
          <Text style={styles.codigos}>
            Triângulo, R1, R1, Esquerda, R1, L1, R2, L1
          </Text>

          <Text style={styles.subtitulo}> - Diminuir nível de procurado: </Text>
          <Text style={styles.codigos}>
            R1, R1, Círculo, R2, Direita, Esquerda, Direita, Esquerda, Direita,
            Esquerda
          </Text>

          <Text style={styles.subtitulo}> - Gerar Helicóptero Buzzard: </Text>
          <Text style={styles.codigos}>
            Círculo, Círculo, L1, Círculo, Círculo, Círculo, L1, L2, R1,
            Triângulo, Círculo, Triângulo
          </Text>
          <Text style={styles.subtitulo}> - Gerar Carrinho de Golfe: </Text>
          <Text style={styles.codigos}>
            Círculo, L1, Esquerda, R1, L2, X, R1, L1, Círculo, X
          </Text>
          <Text style={styles.subtitulo}> - Gerar Carro Comet: </Text>
          <Text style={styles.codigos}>
            R1, Círculo, R2, Direita, L1, L2, X, X, Quadrado, R1
          </Text>
          <Text style={styles.subtitulo}> - Gerar Avião Duster: </Text>
          <Text style={styles.codigos}>
            Direita, Esquerda, R1, R1, R1, Esquerda, Triângulo, Triângulo, X,
            Círculo, L1
          </Text>
          <Text style={styles.subtitulo}> - Gerar Limousine: </Text>
          <Text style={styles.codigos}>
            R2, Direita, L2, Esquerda, Esquerda, R1, L1, Círculo, Direita
          </Text>
          <Text style={styles.subtitulo}> - Gerar Paraquedas: </Text>
          <Text style={styles.codigos}>
            Esquerda, Direita, L1, L2, R1, R2, R2, Esquerda, Esquerda, Direita,
            L1
          </Text>
          <Text style={styles.subtitulo}> - Gerar Carro Rapid GT: </Text>
          <Text style={styles.codigos}>
            R2, L1, Círculo, Direita, L1, R1, Direita, Esquerda, Círculo, R2
          </Text>
          <Text style={styles.subtitulo}> - Gerar Moto Sanchez: </Text>
          <Text style={styles.codigos}>
            Círculo, X, L1, Círculo, Círculo, L1, Círculo, R1, R2, L2, L1, L1
          </Text>
          <Text style={styles.subtitulo}>
            {' '}
            - Gerar Avião Acrobático Stunt Plane:{' '}
          </Text>
          <Text style={styles.codigos}>
            Círculo, Direita, L1, L2, Esquerda, R1, L1, L1, Esquerda, Esquerda,
            X, Triângulo
          </Text>
          <Text style={styles.subtitulo}>
            {' '}
            - Gerar Caminhão de Lixo Trashmaster:{' '}
          </Text>
          <Text style={styles.codigos}>
            Círculo, R1, Círculo, R1, Esquerda, Esquerda, R1, L1, Círculo,
            Direita
          </Text>

          <Text style={styles.subtitulo}> - Gravidade da Lua: </Text>
          <Text style={styles.codigos}>
            Esquerda, Esquerda, L1, R1, L1, Direita, Esquerda, L1, Esquerda
          </Text>

          <Text style={styles.subtitulo}> - Invencibilidade: </Text>
          <Text style={styles.codigos}>
            Direita, X, Direita, Esquerda, Direita, R1, Direita, Esquerda, X,
            Triângulo
          </Text>

          <Text style={styles.subtitulo}> - Munição explosiva: </Text>
          <Text style={styles.codigos}>
            Direita, Quadrado, X, Esquerda, R1, R2, Esquerda, Direita, Direita,
            L1, L1, L1
          </Text>

          <Text style={styles.subtitulo}> - Mira em câmera lenta: </Text>
          <Text style={styles.codigos}>
            Quadrado, L2, R1, Triângulo, Esquerda, Quadrado, L2, Direita, X
          </Text>

          <Text style={styles.subtitulo}> - Modo Bêbado: </Text>
          <Text style={styles.codigos}>
            Triângulo, Direita, Direita, Esquerda, Direita, Quadrado, Círculo,
            EsquerdaO
          </Text>
          <Text style={styles.subtitulo}> - Modo Câmera Lenta: </Text>
          <Text style={styles.codigos}>
            Triângulo, Esquerda, Direita, Direita, Quadrado, R2, R1
          </Text>
          <Text style={styles.subtitulo}> - Mudar Clima: </Text>
          <Text style={styles.codigos}>
            R2, X, L1, L1, L2, L2, L2, Quadrado
          </Text>

          <Text style={styles.subtitulo}> - Nadar mais rápido: </Text>
          <Text style={styles.codigos}>
            Esquerda, Esquerda, L1, Direita, Direita, R2, Esquerda, L2, Direita
          </Text>

          <Text style={styles.subtitulo}> - Pular mais alto: </Text>
          <Text style={styles.codigos}>
            Esquerda, Esquerda, Triângulo, Triângulo, Direita, Direita,
            Esquerda, Direita, Quadrado, R1, R2
          </Text>

          <Text style={styles.subtitulo}> - Queda Livre: </Text>
          <Text style={styles.codigos}>
            L1, L2, R1, R2, Esquerda, Direita, Esquerda, Direita, L1, L2, R1,
            R2, Esquerda, Direita, Esquerda, Direita
          </Text>

          <Text style={styles.subtitulo}>
            {' '}
            - Recarregar habilidade especial:{' '}
          </Text>
          <Text style={styles.codigos}>
            X, X, Quadrado, R1, L1, X, Direita, Esquerda, X
          </Text>
          <Text style={{marginBottom: 10}}></Text>
        </View>
      </ScrollView>
    </View>
  );
};

//make this component available to the app ===========

export default Play;
