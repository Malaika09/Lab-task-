import * as React from 'react';
import { useState } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const[getturn, setturn] = useState(0);
  const[getone, setone] = useState("");
  const[gettwo, settwo] = useState("");
  const[getthree, setthree] = useState("");
  const[getfour, setfour] = useState("");
  const[getfive, setfive] = useState("");
  const[getsix, setsix] = useState("");
  const[getseven, setseven] = useState("");
  const[geteight, seteight] = useState("");
  const[getnine, setnine] = useState("");
  const play = (arg) => {
    if(getturn === 0){
      if (arg === 1 && getone === ""){
        setone("X");
        setturn(1);
      }
      else if(arg === 2 && gettwo === ""){
        settwo("X");
        setturn(1);
      }
      else if(arg === 3 && getthree === ""){
        setthree("X");
        setturn(1);
      }
      else if(arg === 4 && getfour === ""){
        setfour("X");
        setturn(1);
      }
      else if(arg === 5 && getfive === ""){
        setfive("X");
        setturn(1);
      }
      else if(arg === 6 && getsix === ""){
        setsix("X");
        setturn(1);
      }
      else if(arg === 7 && getseven === ""){
        setseven("X");
        setturn(1);
      }
      else if(arg === 8 && geteight === ""){
        seteight("X");
        setturn(1);
      }
      else if(arg === 9 && getnine === ""){
        setnine("X");
        setturn(1);
      }
      
    }
    else{
       if (arg === 1 && getone === ""){
        setone("O");
        setturn(0);
      }
      else if(arg === 2 && gettwo === ""){
        settwo("O");
        setturn(0);
      }
      else if(arg === 3 && getthree === ""){
        setthree("O");
        setturn(0);
      }
      else if(arg === 4 && getfour === ""){
        setfour("O");
        setturn(0);
      }
      else if(arg === 5 && getfive === ""){
        setfive("O");
        setturn(0);
      }
      else if(arg === 6 && getsix === ""){
        setsix("O");
        setturn(0);
      }
      else if(arg === 7 && getseven === ""){
        setseven("O");
        setturn(0);
      }
      else if(arg === 8 && geteight === ""){
        seteight("O");
        setturn(0);
      }
      else if(arg === 9 && getnine === ""){
        setnine("O");
        setturn(0);
      }
      
    }
  }

  return (
    <View style={styles.container}>
      <View>
          <Text>Tit Tac Toe  </Text>
      </View>

       <View>
          <Text> Player 2 ( O )</Text>
      </View>

      <View style={styles.button}>
            <Pressable onPress = {()=> play(1)} style={styles.b}>
            <Text style={styles.text}> {getone} </Text> 
            </Pressable>

            <Pressable onPress = {()=> play(2)} style={styles.b}>
            <Text style={styles.text}> {gettwo} </Text> 
            </Pressable>

            <Pressable onPress = {()=> play(3)}  style={styles.btm}>
            <Text style={styles.text}> {getthree} </Text> 
            </Pressable>
      </View>

      <View style={styles.button}>
            <Pressable onPress = {()=> play(4)} style={styles.b}>
            <Text style={styles.text}> {getfour} </Text> 
            </Pressable>

            <Pressable onPress = {()=> play(5)} style={styles.b}>
            <Text style={styles.text}> {getfive}</Text> 
            </Pressable>

            <Pressable onPress = {()=> play(6)}style={styles.btm}>
            <Text style={styles.text}> {getsix} </Text> 
            </Pressable>
      </View>

      <View style={styles.button}>
            <Pressable onPress = {()=> play(7)} style={styles.btmright}>
            <Text style={styles.text}> {getseven} </Text> 
            </Pressable>

            <Pressable onPress = {()=> play(8)} style={styles.btmright}>
            <Text style={styles.text}> {geteight} </Text> 
            </Pressable>

            <Pressable onPress = {()=> play(9)} style={styles.last}>
            <Text style={styles.text}> {getnine} </Text> 
            </Pressable>
      </View>
      <View>
          <Text> Player 1 ( X ) </Text> 
      </View>

      <Text>
      {getturn} 
      </Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
  },
  b :{
      borderRightStyle: 'solid', 
      borderRightColor: 'black',
      borderRightWidth: 1,
      borderBottomStyle: 'solid', 
      borderBottomColor: 'black',
      borderBottomWidth: 1,
  },
  btm: {
      borderBottomStyle: 'solid', 
      borderBottomColor: 'black',
      borderBottomWidth: 1,
  },
  btmright :{
      borderRightStyle: 'solid', 
      borderRightColor: 'black',
      borderRightWidth: 1,
  },
  text : {
      width: 90 ,
      height: 90,
      alignItems: 'center',
      paddingTop: 35 ,
      fontSize: 20,
      paddingLeft: 30,
  }

});
