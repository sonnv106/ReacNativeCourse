import React from "react";
import {Text, View, StyleSheet,Pressable } from "react-native";
const ListItem = ({items, remove}) =>(
    items.map((item, i)=>(
        <Pressable
            style = {{width: "100%"}}
            onPress = { () => remove(i)}

        >
            <View 
                style = {styles.listItem}
                key = {item}
            >
                <Text>{item}</Text>
            </View>   
        </Pressable>
    ))
);
const styles = StyleSheet.create({
    listItem: {
        backgroundColor: 'brown',
        alignItems: "center",
        padding: 10,
        marginTop: 10,
        width: "100%"
    }    
})
export default ListItem;