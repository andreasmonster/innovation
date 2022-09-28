import React from 'react'
import {Text, View, StyleSheet,ScrollView} from 'react-native'

const FlatListComponent = (props) => { 
    return (
        <View style={styles.container}>
        <Text>Det er mit FlatListComponent</Text>
        <ScrollView style={{height:80}}></ScrollView>
        </View>
    )
}

export default FlatListComponent; 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F382',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  