import React, {useState} from 'react'
import {Button, Text, View} from 'react-native'


const ButtonComponent = () => {

    const [active, setActive] = useState(false)

    return(
        <View>
            <Text>{active ? "Ja" : "Nej"}</Text>
            <Button title={"Kode?"} onPress={()=> setActive(!active)}/> 
        </View>
    )
}
// onPress (ved at trykke på knappen) ændrer active variablen.
export default ButtonComponent;
