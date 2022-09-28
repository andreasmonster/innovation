import React from 'react'
import {Text, View, StyleSheet,ScrollView} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { RECENT_TRIPS } from '../../const'

const FlatListComponent_Trips = () => { 

    const RecentTrips = ({item}) =>{
        return(
            <Text style={styles.liste}>{item}</Text>
            
        )
    }
    return (
        <View style={styles.container}>
        <Text style={{ fontSize: 20, textAlign: 'center', paddingTop:40, }}> Trips you recently have been on:</Text>
        <FlatList style={styles.inLineScroll} data={RECENT_TRIPS} renderItem={({item})=>{
            return(
                <RecentTrips item={item}
                />
            )
        }}
        keyExtractor={item => item}
        
        />
       </View>
    )
}

export default FlatListComponent_Trips; 


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
    
    },
    liste: {
        marginTop: 3,
        borderWidth: 2,
        borderColor: "#62bab5",
        borderRadius: 1,
        backgroundColor: "#62bab5",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
        
        

    },
  });
  