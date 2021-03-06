import * as React from 'react';
import { useState } from 'react'
import { Text, View, StyleSheet, Pressable, Modal, Button} from 'react-native';
import Constants from 'expo-constants';
const array = ["", "" , "", "", "", "", "", "", ""];
export default function App() {
  const[getturn, setturn] = useState(0);
  const[getmodalvisible, setmodalvisible] = useState(false);
  const[getwinner, setwinner] = useState("");
  const[getturn1, setturn1] = useState("o");
  const[getturn2, setturn2] = useState("");
  const play = (arg) => {
    if(getturn == 0){
      if (arg == 1 && array[0] == ""){
        array[0] = "X";
        setturn(1);
        setturn2("o");
        setturn1("");
      }
      if(arg == 2 && array[1] == ""){
        array[1] = "X";
        setturn(1);
        setturn2("o");
        setturn1("");
      }
      if(arg == 3 && array[2] == ""){
        array[2] = "X";
        setturn(1);
        setturn2("o");
        setturn1("");
      }
      if(arg == 4 && array[3] == ""){
        array[3] = "X";
        setturn(1);
        setturn2("o");
        setturn1("");
      }
      if(arg == 5 && array[4] == ""){
        array[4] = "X";
        setturn(1);
        setturn2("o");
        setturn1("");
      }

      if(arg == 6 && array[5] == ""){
        array[5] = "X"; 
        setturn(1);
        setturn2("o");
        setturn1("");
      }
      if(arg == 7 && array[6] == ""){
        array[6] = "X";
        setturn(1);
        setturn2("o");
        setturn1("");
      }
      if(arg == 8 && array[7] == ""){
        array[7] = "X";
        setturn(1);
        setturn2("o");
        setturn1("");
      }
      if(arg == 9 && array[8] == ""){
        array[8] = "X";
        setturn(1); 
        setturn2("o");
        setturn1("");
      }
    }
    else if(getturn == 1){
       if (arg == 1 && array[0] == ""){
        array[0] = "O";
        setturn(0);
        setturn2(""); 
        setturn1("o");
      }
      if(arg == 2 && array[1] == ""){
        array[1] = "O";
        setturn(0); 
         setturn2(""); 
        setturn1("o");
      }
      if(arg == 3 && array[2] == ""){
        array[2] = "O";
        setturn(0); 
         setturn2(""); 
        setturn1("o");
      }
      if(arg == 4 && array[3] == ""){
        array[3] = "O";
        setturn(0);
         setturn2(""); 
        setturn1("o");
      }
      if(arg == 5 && array[4] == ""){
        array[4] = "O";
        setturn(0);
         setturn2(""); 
        setturn1("o");
      }
      if(arg == 6 && array[5] == ""){
        setturn(0);
        array[5] = "O"; 
         setturn2(""); 
        setturn1("o");
      }
      if(arg == 7 && array[6] == ""){
        setturn(0);
        array[6] = "O";
         setturn2(""); 
        setturn1("o");
      }
      if(arg == 8 && array[7] == ""){
        array[7] = "O";
        setturn(0);
         setturn2(""); 
        setturn1("o");
      }
      if(arg == 9 && array[8] == ""){
        array[8] = "O";
        setturn(0);    
         setturn2(""); 
        setturn1("o");
      }
    }

    if( (array[0] == "X" && array[1] == "X" && array[2] == "X") || 
      (array[3] == "X" && array[4] == "X" && array[5] == "X") || 
      (array[6] == "X" && array[7] == "X" && array[8] == "X") || 
      (array[0] == "X" && array[3] == "X" && array[6] == "X") || 
      (array[1] == "X" && array[4] == "X" && array[7] == "X") || 
      (array[2] == "X" && array[5] == "X" && array[8] == "X") || 
      (array[0] == "X" && array[4] == "X" && array[8] == "X") ||
      (array[2] == "X" && array[4] == "X" && array[6] == "X")) {
        setwinner("Player 1 won!! :D");
        setturn(11);
        setmodalvisible(true);
      }
      else if ( (array[0] == "O" && array[1] == "O" && array[2] == "O") || 
      (array[3] == "O" && array[4] == "O" && array[5] == "O") || 
      (array[6] == "O" && array[7] == "O" && array[8] == "O") || 
      (array[0] == "O" && array[3] == "O" && array[6] == "O") || 
      (array[1] == "O" && array[4] == "O" && array[7] == "O") || 
      (array[2] == "O" && array[5] == "O" && array[8] == "O") || 
      (array[0] == "O" && array[4] == "O" && array[8] == "O") ||
      (array[2] == "O" && array[4] == "O" && array[6] == "O")){
          setwinner("Player 2 won!! :D");
          setturn(11);
          setmodalvisible(true);
      }
      else if(
        array[0] !== "" && array[1] !== "" && array[2] !== "" && array[3] !== "" &&
        array[4] !== "" && array[5] !== "" && array[6] !== "" && array[7] !== "" &&
        array[8]!== ""
      ){
        setturn(11);
        setmodalvisible(true);
        setwinner("It's a draw!!");
      }
  }

    const playagain = () => {
       setmodalvisible(false);
       setwinner("");
       setturn(0);
       setturn1("o");
       setturn2("");
       for(var i = 0; i<9; i++){
          array[i] = "";
       }
  }

  return (
    <View style={styles.container}>
    
    <Modal animationType="none" visible={getmodalvisible}>
    <View style={styles.container}>
          <Text style={styles.title}> {getwinner}</Text> 
          <View style= {styles.playag}> 
            <Button color= "black" style ={styles.playagain} onPress = {playagain} title= "PLAY AGAIN"> </Button>
          </View> 
    </View>
         
    </Modal>

      <View style={styles.t1}>
          <Text style={styles.title}>Tit Tac Toe  </Text>
      </View>

       <View style={styles.p2}>
          <Text style = {styles.player}> {getturn2} </Text> 
          <Text style={styles.player}> Player 2 ( O )</Text>
      </View>

      <View style={styles.button}>
            <Pressable onPress = {()=> play(1)} style={styles.b}>
            <Text style={styles.text}> {array[0]} </Text> 
            </Pressable>

            <Pressable onPress = {()=> play(2)} style={styles.b}>
            <Text style={styles.text}> {array[1]} </Text> 
            </Pressable>

            <Pressable onPress = {()=> play(3)}  style={styles.btm}>
            <Text style={styles.text}> {array[2]} </Text> 
            </Pressable>
      </View>

      <View style={styles.button}>
            <Pressable onPress = {()=> play(4)} style={styles.b}>
            <Text style={styles.text}> {array[3]} </Text> 
            </Pressable>

            <Pressable onPress = {()=> play(5)} style={styles.b}>
            <Text style={styles.text}> {array[4]}</Text> 
            </Pressable>

            <Pressable onPress = {()=> play(6)}style={styles.btm}>
            <Text style={styles.text}> {array[5]} </Text> 
            </Pressable>
      </View>

      <View style={styles.button}>
            <Pressable onPress = {()=> play(7)} style={styles.btmright}>
            <Text style={styles.text}> {array[6]} </Text> 
            </Pressable>

            <Pressable onPress = {()=> play(8)} style={styles.btmright}>
            <Text style={styles.text}> {array[7]} </Text> 
            </Pressable>

            <Pressable onPress = {()=> play(9)} style={styles.last}>
            <Text style={styles.text}> {array[8]} </Text> 
            </Pressable>
      </View>
      <View style={styles.p1}>
          <Text style = {styles.player}> {getturn1}  </Text> 
          <Text style={styles.player}> Player 1 ( X ) </Text> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  button: {
    flexDirection: 'row',
  },
  b :{
      borderRightStyle: 'solid', 
      borderRightColor: 'white',
      borderRightWidth: 1,
      borderBottomStyle: 'solid', 
      borderBottomColor: 'white',
      borderBottomWidth: 1,
  },
  btm: {
      borderBottomStyle: 'solid', 
      borderBottomColor: 'white',
      borderBottomWidth: 1,
  },
  btmright :{
      borderRightStyle: 'solid', 
      borderRightColor: 'white',
      borderRightWidth: 1,
  },
  text : {
      width: 90 ,
      height: 90,
      alignItems: 'center',
      paddingTop: 35 ,
      fontSize: 20,
      paddingLeft: 30,
      color: 'white',
  },
  title :{
    color: 'white',
    fontSize: 30, 
    fontFamily: 'monospace',
  },
  t1: {
      marginBottom: 100,
      marginLeft: 40,
  },
  player: {
    color: 'white',
    fontSize: 15,
  }, 
  p1: {
    flexDirection: 'row',
    paddingTop: 30,
  }, 
  p2: {
    flexDirection: 'row',
    paddingBottom: 30,
  },
  playag: {
    marginTop: 80,
    width: 200,
    height: 40, 
    borderColor: 'white',
    borderWidth: 1,
  },
});
