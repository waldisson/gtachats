import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerCodigo: {
    flex: 1,
    backgroundColor: '#000',
  },
  titulo: {
    fontSize: 40,
    textAlign: 'right',
    marginRight: 20,
    marginTop: 45,
    fontWeight: 'bold',
    marginLeft: 50,
    color: '#fff',
  },
  textos: {
    marginHorizontal: 15,
    marginTop: 30,
    textAlign: 'right',
    color: '#fff',
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
    borderColor: '#e8e8e8',
    elevation: 2,
  },
});

export default styles;
