//import liraries ==================================

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  Linking,
  StatusBar,
} from 'react-native';
import {Button, Fab} from 'native-base';
import styles from '../styles/stylesHome';
import {AdMobBanner} from 'react-native-admob';

// create hooks =============================='

const avaliar = () => {
  Alert.alert(
    'Avalie-nos',
    'Sua avaliação é de extrema importancia para que venhamos aprimorar ainda mais nosso serviços. Em caso de contato: truquesgta@gmail.com',

    [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Avaliar App',
        onPress: () => Linking.openURL('market://details?id=com.gtachats'),
      },
    ],
    {cancelable: false},
  );
};

const Home = () => {
  return (
    <View style={styles.containerCodigo}>
      <View>
        <StatusBar
          backgroundColor="white"
          barStyle="dark-content"
          hidden={false}
        />
      </View>
      <ScrollView>
        <View>
          <Text style={styles.titulo}> Grand Thelf Auto V</Text>
          <Text style={styles.textos}>
            O GTA 5 pode ter sido remasterizado, mas há coisas que nunca mudam,
            pois esta versão inclui os códigos de GTA V, agora para a PS4, Xbox
            One e PC, para que possas criar o caos no jogo. Para além dos
            códigos para os jogadores, onde podes alterar diversas coisas,
            também temos os códigos para mexer com o mundo de GTA V. Pode mudar
            o tempo, por exemplo, ou até os efeitos da gravidade. Podes também
            usar os códigos para que os veículos que escolhes apareçam do nada.
          </Text>
          <Text style={styles.textosFim}>
            Tens que lembrar de uma coisa antes de usar os códigos de GTA V, é
            que ao usar não irá desbloquear nenhum troféu ou achievement, isto
            se gravares e continuares com esse save. Também exigirá alguma
            paciência para que consigas introduzir corretamente cada código.
            Recomendamos que uses o D-pad em vez do analógico, e tem a certeza
            de cada botão que carregues.
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={avaliar} style={styles.button}>
        <Image
          source={require('../assets/icons/playstoreBlack.png')}
          style={{width: 22, height: 22}}
        />
      </TouchableOpacity>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 5,
        }}>
        <AdMobBanner
          adSize="banner"
          adUnitID="ca-app-pub-1920980020493006/8703148619"
        />
      </View>
    </View>
  );
};

export default Home;
