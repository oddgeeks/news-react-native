import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#00838f',
    height: 160
  },
  personIcon: {
    marginTop: 35,
    marginLeft: 20,
    backgroundColor: '#ffa040',
    width: 60,
    height: 60,
    color: 'white',
    borderRadius: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30
  },
  personName: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 14,
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: '500'
  },
  category: {
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 14,
    color: 'gray',
    fontFamily: 'Roboto',
    fontWeight: '200'
  },
  line: {
    marginVertical: 5,
    marginLeft: 20,
    borderBottomColor: '#DCDCDC',
    borderBottomWidth: 1,

  }
});

export default styles;
