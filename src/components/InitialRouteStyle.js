import { StyleSheet } from 'react-native';

const colors = {
  primary: '#00838f',
  secondary: '#ff6f00'
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#00838f',
    flex: 1
  },
  text: {
    marginTop: '50%',
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'serif',
    fontStyle: 'italic',
    textShadowRadius: 5,
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowColor: 'black'
  },
  spinner: {
    marginTop: '5%'
  }
});


export default styles;
