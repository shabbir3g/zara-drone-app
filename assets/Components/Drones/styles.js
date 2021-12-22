import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    droneContainer: {
        width: '100%',
        height: '100%'
      },
      titles: {
        width: '100%',
        alignItems: 'center',
        zIndex: 999,
        marginTop: '5%'
      },
      title: {
        fontSize: 35,
        fontWeight: '500',
        textAlign: 'left',
        color: '#000',
      },
      desc: {
        fontSize: 16,
        color: '#000',
        width: '70%',
        margin: 'auto',
        paddingTop: 20,
        textAlign: 'justify'
      },
      backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute'
      },
      sectionTitle: {
          marginTop: '30%',
          alignItems: 'center',
      }
});

export default styles;
