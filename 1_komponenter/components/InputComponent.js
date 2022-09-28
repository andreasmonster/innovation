import React, {useState} from 'react'
import {Button, Text, TextInput, View} from 'react-native'


const InputComponent = () => {

    const [inputValue, setInputValue] = useState("") // String
// Ved onChangetext Variablen, tager den den string som bliver indtastet, og sætter ind efter "test", ved inputValue
    return(
        <View>
        <TextInput
                style={{borderWidth:1}}
                onChangeText={(txt) => setInputValue(txt)}
                value={inputValue}
            />

    <View style={{flexDirection:'row',width:"50%"}}>
     <Text style={{flex: 1, flexWrap: 'wrap'}}>Test {inputValue} </Text>
            </View>
        </View>
    )
}

export default InputComponent;
