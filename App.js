import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const[getrandom] = useState( Math.floor(Math.random()* 100))
  const [getText, setText] = useState("")
  const [getResult, setResult] = useState("")

  const buttonClick = (txt) => {
    setText(getText +txt)
  }
  const reset = () => {
    // alert(txt)
    setText("")
    setResult("")
  }
  const game = () => {
    if(getrandom == getText){
      setResult("You won")
    }
    else{
      setResult('You Lost, the number was ' +  getrandom)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, marginBottom: 50, color: 'blue' }}> GUESS A NUMBER </Text>

      <Text style={{ fontSize: 20, color: 'red', marginBottom: 10}}>{getText}</Text>
      
     <View style={buttons.button}>  
    <View style={buttons.b}>
      <Button title= "0" onPress={buttonClick.bind(this, 0)}> </Button>
      </View>
    <View style={buttons.b}>
      <Button title="1"  onPress={buttonClick.bind(this, 1)}> </Button> 
       </View> 
    <View style={buttons.b}>
      <Button title="2" onPress={buttonClick.bind(this, 2)}> </Button>
      </View>
     </View>

     <View style={buttons.button}>  
    <View style={buttons.b}>
      <Button title= "3" onPress={buttonClick.bind(this, 3)}> </Button>
      </View>
    <View style={buttons.b}>
      <Button title="4"  onPress={buttonClick.bind(this, 4)}> </Button> 
       </View> 
    <View style={buttons.b}>
      <Button title="5" onPress={buttonClick.bind(this, 5)}> </Button>
      </View>
     </View>
      
     <View style={buttons.button}>  
    <View style={buttons.b}>
      <Button title= "6" onPress={buttonClick.bind(this, 6)}> </Button>
      </View>
    <View style={buttons.b}>
      <Button title="7"  onPress={buttonClick.bind(this, 7)}> </Button> 
       </View> 
    <View style={buttons.b}>
      <Button title="8" onPress={buttonClick.bind(this, 8)}> </Button>
      </View>
     </View>
       
    <View style={buttons.button}>  
      
      <View style={buttons.b}>
      <Button title="9"  onPress={buttonClick.bind(this, 9)}> </Button> 
       </View> 
      
      <View style={buttons.b}>
      <Button title="RESET" onPress={reset.bind(this)}> </Button>
      </View>
      
      <View style={buttons.b}>
      <Button title="GUESS" onPress={game.bind(this)}> </Button>
      </View>
      </View> 

      <Text> {getResult}</Text>
    </View>
  );
}

const buttons = StyleSheet.create({
  button:{
    flexDirection: 'row',
    marginBottom: 10, 
  },
  b:{
    marginRight: 10, 
    width: 80,
  }
});

const styles = StyleSheet.create({
    container: {
      flex:1,      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
});
