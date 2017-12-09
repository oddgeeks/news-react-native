import { StyleSheet } from 'react-native';

// const colors = {
//   primary: '#00838f',
//   secondary: '#ff6f00'
// };

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#00838f'
  },
  signInView: {
    flex: 1,
    alignItems: 'center',
    marginTop: '35%',
  },
  background: {
    backgroundColor: '#00838f',
    flex: 1
  },
  header: {
    marginTop: '30%',
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
    textShadowColor: 'grey'
  },
  spinner: {
    marginTop: '5%'
  },
  text: {
    marginTop: '5%',
    color: 'white',
    fontSize: 19,
    textAlign: 'center',
    fontFamily: 'Roboto',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1
    },
    textShadowColor: 'grey'
  }
});

export default styles;
