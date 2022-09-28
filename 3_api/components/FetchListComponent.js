import React from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'


const FetchListComponent = (props) => { 
    return (
        <View style={styles.container}>
        <Text>Det er mit FetchListComponent</Text>
        <ScrollView style={{height:80}}></ScrollView>
        </View>
    )
}

export default FetchListComponent; 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f33a',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  