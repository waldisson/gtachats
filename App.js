import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';

import Home from './src/pages/Home';
import Codigo from './src/pages/Codigo';
import Pc from './src/pages/Pc';
import Play from './src/pages/Play';
import Xbox from './src/pages/Xbox';

console.disableYellowBox = true;
const Appcontainer = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home',
        header: null,
        tabBarLabel: 'Inicio',
        tabBarIcon: ({tintColor, focused}) => {
          if (focused) {
            return (
              <Image
                style={{width: 20, height: 20}}
                source={require('./src/assets/image/houseOn.png')}
              />
            );
          } else {
            return (
              <Image
                style={{width: 20, height: 20}}
                source={require('./src/assets/image/houseOff.png')}
              />
            );
          }
        },
      },
    },
    // Codigo: {
    //   screen: Codigo,
    //   navigationOptions: {
    //     title: 'Codigo',
    //     header: null,
    //     tabBarLabel: 'Códigos',
    //     tabBarIcon: ({tintColor, focused}) => {
    //       if (focused) {
    //         return (
    //           <Image
    //             style={{width: 20, height: 20}}
    //             source={require('./src/assets/image/codeOn.png')}
    //           />
    //         );
    //       } else {
    //         return (
    //           <Image
    //             style={{width: 20, height: 20}}
    //             source={require('./src/assets/image/codeOff.png')}
    //           />
    //         );
    //       }
    //     },
    //   },
    // },
    Pc: {
      screen: Pc,
      navigationOptions: {
        title: 'Pc',
        header: null,
        tabBarLabel: 'Computador',
        tabBarIcon: ({tintColor, focused}) => {
          if (focused) {
            return (
              <Image
                source={require('./src/assets/image/gamingOn.png')}
                style={{width: 20, height: 20}}
              />
            );
          } else {
            return (
              <Image
                source={require('./src/assets/image/gamingOff.png')}
                style={{width: 20, height: 20}}
              />
            );
          }
        },
      },
    },
    Play: {
      screen: Play,
      navigationOptions: {
        title: 'Play',
        header: null,
        tabBarLabel: 'PlayStation',
        tabBarIcon: ({tintColor, focused}) => {
          if (focused) {
            return (
              <Image
                source={require('./src/assets/image/psOn.png')}
                style={{width: 20, height: 20}}
              />
            );
          } else {
            return (
              <Image
                source={require('./src/assets/image/psOff.png')}
                style={{width: 20, height: 20}}
              />
            );
          }
        },
      },
    },
    Xbox: {
      screen: Xbox,
      navigationOptions: {
        title: 'Xbox',
        header: null,
        tabBarLabel: 'Xbox',
        tabBarIcon: ({tintColor, focused}) => {
          if (focused) {
            return (
              <Image
                source={require('./src/assets/image/xboxOn.png')}
                style={{width: 20, height: 20}}
              />
            );
          } else {
            return (
              <Image
                source={require('./src/assets/image/xboxOff.png')}
                style={{width: 20, height: 20}}
              />
            );
          }
        },
      },
    },
  },
  {
    headerMode: 'float',
    tabBarPosition: 'bottom', // colocar o menu em baixo
    animationEnabled: true, // faz anima��o em todas as plataformas
    initialRouteName: 'Home', // para iniciar com outra tela que n�o seja a primeira
    // altera a posi��o do bot�o no menu

    tabBarOptions: {
      showIcon: true, //aparecer os icones do menu no android
      showLabel: true, //esconder os nomes dos icons do menu (true mostra e false n�o mostra)

      labelStyle: {
        fontSize: 7,
        color: '#000',
      },
      iconStyle: {
        fontSize: 12,
      },
    },
  },
);

export default createAppContainer(Appcontainer);
