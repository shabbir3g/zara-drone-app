import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 50,
    backgroundColor: 'rgba(10,61,98,.6254901960784314)'
  },
  logo: {
    width: 200,
    height: 40,
    resizeMode: 'contain',
  },
  menu: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  }
});

export default styles;