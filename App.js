import React, { useState, useEffect } from "react";
import {Text, View, 
  StyleSheet, ScrollView, 
  ActivityIndicator,Image,
  ImageBackground
} from "react-native";
import Nav from './src/nav';
import Generate from './src/generate'
import ListItem from "./src/listitems";
import Inputs from "./src/inputs";
import Mountain from './assets/mountain.jpg';
import ModalComponent from './src/modal'

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
      <ScrollView style = {{width: '100%'}}
        // onContentSizeChange = {(w,h )=>{
        // alert(w + " | "+h)
        // }}
        onMomentumScrollBegin = {()=>alert ("begin")}
        onMomentumScrollEnd = {()=>alert ("end")}
      >
        <ModalComponent/>
        {/* <Image source={{uri: 'https://picsum.photos/400/400'}} style = {styles.mountain}
        resizeMode ="contain"
        onLoadEnd={()=>alert("Image loaded")}/> */}
        {/* <ImageBackground source={Mountain} style={styles.mountain}
        resizeMode="cover">
          <Text>Text Inside</Text>
        </ImageBackground> */}
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
        {/* <ActivityIndicator animating={false}/>
        <ActivityIndicator size="large"/>
        <ActivityIndicator size="small" color="#cdcdcd"/> */}
      </ScrollView>
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
  },
  mountain: {
    width: "100%",
    height: 400
  }
  
})
export default App;