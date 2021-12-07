import React, { useState, useEffect } from "react";
import {Text, View, StyleSheet} from "react-native";
import Nav from './src/nav';
import Generate from './src/generate'
import ListItem from "./src/listitems";
import Inputs from "./src/inputs";
const App = () =>{
  const [hello, setHello] = useState(true);
  const [random, setRandom] = useState([20,25]);
  useEffect(()=>{
    // setTimeout(()=>{
    //   setHello(false)
    // },2000)
  },[]);
  const onAddRandom = () => {
    const randomVal = Math.floor(Math.random()*100)+1;
    const newState = [...random, randomVal];
    console.log(random);
    setRandom(newState);
  };
  const onItemRemove = (position)=>{
    const newArray = random.filter((item, i)=>{
      return position !==i;
    })
    setRandom(newArray);
  }
  return (
    <View style = {styles.mainView}>
      <Nav nameOfApp = "Awesome App"/>
      <View style={styles.basicView}>
        <Text>
          Hello let say something 1
        </Text> 
      </View>
      
      <View style = {styles.basicView}>
        <Text>
          Hello let say something 2
        </Text> 
      </View>
      {/* <View>
        {hello ? <Text> Hello everybody</Text>: null}
      </View> */}
      <Generate add = {()=>onAddRandom()}/>
      <ListItem items ={random} remove = {(pos)=> onItemRemove(pos)}/>
      <Inputs/>
    </View>
    
  )
}
const styles = StyleSheet.create({
  mainView:{
    backgroundColor: '#fff',
    flex:1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  basicView: {
    marginBottom: 5,
    width: "100%",
    backgroundColor: 'green',
    fontSize: 20,
    padding: 20,
    textAlign: "center"
  }
  
})
export default App;