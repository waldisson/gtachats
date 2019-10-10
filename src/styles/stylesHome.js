import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerCodigo: {
    flex: 1,
  },
  titulo: {
    fontSize: 40,
    textAlign: 'right',
    marginRight: 20,
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 50,
  },
  textos: {
    marginHorizontal: 15,
    marginTop: 30,
    textAlign: 'right',
  },
  textosFim: {
    marginHorizontal: 15,
    marginTop: 10,
    textAlign: 'right',
    marginBottom: 50,
  },

  button: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 3,
    borderWidth: 3,
    borderColor: '#010101',
    elevation: 5,
    marginBottom: 70,
  },
});

export default styles;
