import React, { useState } from "react";
import {Text, View, StyleSheet, TextInput } from "react-native";
const Inputs = () =>{
    const [myInput, setMyinput] = useState('');
    const onChangeInput = (event)=>{
        setMyinput(event)
    }
    return (  
        <TextInput
            style = {styles.input}
            value={myInput}
            onChangeText = {(e)=>onChangeInput(e)}
            multiline = {true}
            maxLength = {25}
            keyboardType = "number-pad"
        />
    )
}
const styles = StyleSheet.create({
    input:{
        backgroundColor: "#f2f2f2",
        width: "100%",
        fontSize: 20,
        marginTop: 20,
        padding: 10,

    }
})
export default Inputs;