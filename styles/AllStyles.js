import { StyleSheet } from 'react-native';


export const colors = {
   bg: 'pink',
   listBG: 'ghostwhite',
   text: 'black',
}



export const allStyles = StyleSheet.create ({

   mainContainer: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.bg,
      alignContent: 'center',
   },
   listContainer: {
      flexGrow: 0,
      height:'80%',
      width: '80%',
      backgroundColor: colors.listBG,
   },
   eventCard: {
      borderWidth: 1,
      backgroundColor: 'white',
      padding: 20,
      margin: 20,
   },
   monthTitle: {
      marginTop: 10,
      marginLeft: 10,
   },
   yearBreak: {
      height: 2,
      width: '80%',
      alignSelf: 'center',
      marginTop: 30,
      marginBottom: 20,
      backgroundColor: colors.text,
   },
   initButton: {
      height: 50,
      width: 100,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'ghostwhite',
      borderWidth: 1,
   },
   buttonView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-between',
   },
   modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
   },
   eventDisplayView: {
      backgroundColor: 'ghostwhite',
      justifyContent: 'space-around',
      height: '50%',
      width: '90%',
      borderWidth: 3,
   },
   displayText: {
      alignSelf: 'center',
   },
   closeButton: {
      height: '10%',
      width: '30%',
      marginTop: 20,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderWidth: 1,
   }

});

