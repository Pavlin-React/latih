import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.lightHeader} >Grab your</Text>
      <Text style={styles.boldHeader} >delicious meal!</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
   lightHeader: {
     fontSize: 35,
   },
   boldHeader: {
     fontSize: 40, 
     fontWeight: 'bold'
   },
   container: {
     marginTop: 60,
     marginHorizontal: 25,
   }
})