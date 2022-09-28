import React from 'react'
import {Text, View, StyleSheet,ScrollView} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { RECENT_PURCHASE } from '../../const'

const FlatListComponent_Purchase = () => { 

    const PurchasedItems = ({item}) =>{
        return(
            <Text style={styles.liste}>{item}</Text>
            
        )
    }
    return (
        <View style={styles.container}>
        <Text style={{ fontSize: 20, textAlign: 'center', paddingTop:40}}>Your Recent Purchases:</Text>
        <FlatList style={styles.inLineScroll} data={RECENT_PURCHASE} renderItem={({item})=>{
            return(
                <PurchasedItems item={item}
                />
            )
        }}
        keyExtractor={item => item}
        
        />
       </View>
    )
}

export default FlatListComponent_Purchase; 


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
    },
    liste: {
        marginTop:  3,
        borderWidth: 2,
        borderColor: "#62bab5",
        borderRadius: 1,
        backgroundColor: "#62bab5",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"

    },
  });
  