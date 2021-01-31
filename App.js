import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {

  const [text, setText] = React.useState('Guess a number between 1 - 100.');
  const [guess,setGuess] = React.useState('');
  const[counter, setCounter] = React.useState(0);
  const [randomNumber, setRandomNumber] = React.useState(Math.floor(Math.random() * 100) + 1);
  console.log(randomNumber);

  const checkGuess = () => {

    if(parseInt(guess)>randomNumber){
      setText('Your guess ' + guess + ' is too high');
      setCounter(counter+1);
      setGuess('');
    }else if(parseInt(guess) < randomNumber){
      setText('Your guess ' + guess + ' is too low');
      setCounter(counter+1);
      setGuess('');
    }else{
      setText('');
      Alert('You guessed the numeber in ' + counter + ' guesses');
    }

  }
  
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput style={{width:200, borderColor: 'gray', borderWidth:1}}
       keyboardType={'numeric'} numeric value = {guess} onChangeText={guess => setGuess(guess)}/><br/>
        <Button onPress = {checkGuess} title="MAKE GUESS"/> 
      <StatusBar style="auto" />
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
});
