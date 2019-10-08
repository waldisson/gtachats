//import liraries ==================================
import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../styles/stylesXbox';

// create a component ==============================

const Xbox = () => {
  return (
    <View style={styles.containerXbox}>
      <ScrollView>
        <View>
          <Text style={styles.tituloXbox}> Xbox 360 e Xbox One </Text>

          <Text style={styles.textos}>
            Os códigos funcionam usando o direcional do controle e os botões
            correspondentes. O ideal é fazer de forma rápida, sem pausas longas,
            para que todos os cheats entrem corretamente. Quando ativado, o
            código mostra uma mensagem acima do mapa, sinalizando que está
            funcionando.
          </Text>

          <Text style={styles.subtitulo}> - Aumentar nível de procurado:</Text>
          <Text style={styles.codigos}>
            RB, RB, B, RT, Esquerda, Direita, Esquerda, Direita, Esquerda,
            Direita
          </Text>

          <Text style={styles.subtitulo}> - Armadura e vida no máximo:</Text>
          <Text style={styles.codigos}>
            B, LB, Y, RT, A, X, B, Direita, X, LB, LB, LB
          </Text>

          <Text style={styles.subtitulo}> - Ataques explosivos: </Text>
          <Text style={styles.codigos}>
            Direita, Esquerda, A, Y, RB, B, B, B, LT
          </Text>

          <Text style={styles.subtitulo}> - Armas e munição:</Text>
          <Text style={styles.codigos}>
            Y, RT, Esquerda, LB, A, Direita, Y, Baixo, X, LB, LB, LB
          </Text>

          <Text style={styles.subtitulo}> - Correr mais rápido:</Text>
          <Text style={styles.codigos}>
            Y, Esquerda, Direita, Direita, LT, LB, X
          </Text>

          <Text style={styles.subtitulo}> - Carros deslizando: </Text>
          <Text style={styles.codigos}>
            RB, RB, B, RT, Direita, Esquerda, Direita, Esquerda, Direita,
            Esquerda
          </Text>

          <Text style={styles.subtitulo}> - Carros deslizando: </Text>
          <Text style={styles.codigos}>
            Y, RB, RB, Esquerda, RB, LB, RT, LB
          </Text>

          <Text style={styles.subtitulo}> - Diminuir nível de procurado:</Text>
          <Text style={styles.codigos}>
            RB, RB, B, RT, Direita, Esquerda, Direita, Esquerda, Direita,
            Esquerda
          </Text>

          <Text style={styles.subtitulo}> - Gerar Helicóptero Buzzard:</Text>
          <Text style={styles.codigos}>
            B, B, LB, B, B, B, LB, LT, RB, Y, B, Y
          </Text>

          <Text style={styles.subtitulo}> - Gerar Carrinho de Golfe: </Text>
          <Text style={styles.codigos}>
            B, LB, Esquerda, RB, LT, A, RB, LB, B, A
          </Text>

          <Text style={styles.subtitulo}> - Gerar Carro Comet: </Text>
          <Text style={styles.codigos}>
            RB, B, RT, Direita, LB, LT, A, A, X, RB
          </Text>

          <Text style={styles.subtitulo}> - Gerar Avião Duster: </Text>
          <Text style={styles.codigos}>
            Direita, Esquerda, RB, RB, RB, Esquerda, Y, Y, A, B
          </Text>

          <Text style={styles.subtitulo}> - Gerar Limousine:</Text>
          <Text style={styles.codigos}>
            RT, Direita, LT, Esquerda, Esquerda, RB, LB, B, Direita
          </Text>

          <Text style={styles.subtitulo}> - Gerar Paraquedas: </Text>
          <Text style={styles.codigos}>
            Esquerda, Direita, LB, LT, RB, RT, RT, Esquerda, Esquerda, Direita,
            LB
          </Text>

          <Text style={styles.subtitulo}> - Gerar Carro Rapid GT: </Text>
          <Text style={styles.codigos}>
            RT, LB, B, Direita, LB, RB, Direita, Esquerda, B, RT
          </Text>

          <Text style={styles.subtitulo}> - Gerar Moto Sanchez: </Text>
          <Text style={styles.codigos}>
            B, A, LB, B, B, LB, B, RB, RT, LT, LB, LB
          </Text>

          <Text style={styles.subtitulo}>
            {' '}
            - Gerar Avião Acrobático Stunt Plane:{' '}
          </Text>
          <Text style={styles.codigos}>
            B, Direita, LB, LT, Esquerda, RB, LB, LB, Esquerda, Esquerda, A, Y
          </Text>

          <Text style={styles.subtitulo}>
            {' '}
            - Gerar Caminhão de Lixo Trashmaster:{' '}
          </Text>
          <Text style={styles.codigos}>
            B, RB, B, RB, Esquerda, Esquerda, RB, LB, B, Direita
          </Text>

          <Text style={styles.subtitulo}> - Gravidade da Lua: </Text>
          <Text style={styles.codigos}>
            Esquerda, Esquerda, LB, RB, LB, Direita, Esquerda, LB, Esquerda
          </Text>

          <Text style={styles.subtitulo}> - Invencibilidade:</Text>
          <Text style={styles.codigos}>
            Direita, A, Direita, Esquerda, Direita, RB, Direita, Esquerda, A, Y
          </Text>

          <Text style={styles.subtitulo}> - Munição explosiva: </Text>
          <Text style={styles.codigos}>
            Direita, X, A, Esquerda, RB, RT, Esquerda, Direita, Direita, LB, LB,
            LB
          </Text>

          <Text style={styles.subtitulo}> - Mira em câmera lenta:</Text>
          <Text style={styles.codigos}>
            X, LT, RB, Y, Esquerda, X, LT, Direita, A
          </Text>

          <Text style={styles.subtitulo}> - Modo Bêbado:</Text>
          <Text style={styles.codigos}>
            Y, Direita, Direita, Esquerda, Direita, X, B, Esquerda
          </Text>

          <Text style={styles.subtitulo}> - Modo Câmera Lenta:</Text>
          <Text style={styles.codigos}>
            Y, Esquerda, Direita, Direita, X, RT, RB
          </Text>
          <Text style={styles.subtitulo}> - Mudar Clima: </Text>
          <Text style={styles.codigos}>RT, A, LB, LB, LT, LT, LT, X</Text>

          <Text style={styles.subtitulo}> - Nadar mais rápido:</Text>
          <Text style={styles.codigos}>
            Esquerda, Esquerda, LB, Direita, Direita, RT, Esquerda, LT, Direita
          </Text>

          <Text style={styles.subtitulo}> - Pular mais alto: </Text>
          <Text style={styles.codigos}>
            Esquerda, Esquerda, Y, Y, Direita, Direita, Esquerda, Direita, X,
            RB, RT
          </Text>

          <Text style={styles.subtitulo}> - Queda Livre:</Text>
          <Text style={styles.codigos}>
            LB, LT, RB, RT, Esquerda, Direita, Esquerda, Direita, LB, LT, RB,
            RT, Esquerda, Direita, Esquerda, Direita
          </Text>

          <Text style={styles.subtitulo}>
            {' '}
            - Recarregar habilidade especial:
          </Text>
          <Text style={styles.codigos}>
            A, A, X, RB, LB, A, Direita, Esquerda, A
          </Text>
          <Text style={{marginBottom: 10}}></Text>
        </View>
      </ScrollView>
    </View>
  );
};

//make this component available to the app ===========

export default Xbox;
