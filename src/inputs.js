import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput, Button } from "react-native";
const Inputs = () =>{
    const [myInput, setMyinput] = useState('');
    const [names, setName] = useState(["John","James"])
    const onChangeInput = (event)=>{
        setMyinput(event)
    }
    const onAddUser = ()=>{
        const newState = [...names,myInput];
        setName(newState);
        setMyinput("");
    }
    return (  
        <>
            <TextInput
                style = {styles.input}
                value={myInput}
                onChangeText = {(e)=>onChangeInput(e)}
                multiline = {true}
                maxLength = {25}
                // keyboardType = "number-pad"
                />
            <Button title="Add user" onPress = {onAddUser}></Button>
            {names.map(name=>(
                <Text 
                    style = {styles.user}
                    key={name}
                >{name}</Text>
            ))}
        </>  
    )
}
const styles = StyleSheet.create({
    input:{
        backgroundColor: "#f2f2f2",
        width: "100%",
        fontSize: 20,
        marginTop: 20,
        padding: 10,
    },
    user: {
        padding: 5,
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#cecece',
        marginBottom: 5
    }
})
export default Inputs;