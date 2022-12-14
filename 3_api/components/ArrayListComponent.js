import React from 'react'
import {Text, View, StyleSheet, ScrollView} from 'react-native'
import { COUNTRIES } from '../const'



const ArrayListComponent = () => {

    return(
        <View style={styles.container}>
            {/* Title med styling*/ }
            <Text style={{ fontSize: 20, textAlign:'center',paddingTop:40 }}>
                2 KvartFinale lande - Array Map
            </Text>

            <ScrollView style={{height:80}}>
                {/* Map funktion, som looper igemmen arrayet ( personlig favorit )*/}
                {
                    COUNTRIES.map((country,key) => {
                        return(
                            <Text key={key}>
                                Oh boy i love " {country} "
                            </Text>
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4511e',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  
export default ArrayListComponent;