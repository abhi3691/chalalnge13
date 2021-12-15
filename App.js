import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, Button,TextInput } from 'react-native';
import AsyncStorage  from '@react-native-async-storage/async-storage'
export default function App() {
  const [data, setData] = useState('');
  const [value,setValue] = useState('');
  const add = () => {
  if(data){
    AsyncStorage.setItem('note',data)
    setData('')
    alert('Value Added')
  }
  else{
    alert('Please fill data')
  }
  }

  const get =  () => {
     AsyncStorage.getItem('note')
      .then((value) =>{
        setValue(value);
      });
    
    }
 

  
  useEffect(() => {
    get();
  },[]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{value}</Text>
      <TextInput style={styles.inputStyle}
      placeholder='write Your Task'
     onChangeText={(text) => setData(text)}
      ></TextInput>
      <View style={styles.button}>
        <Button
          title={'Add'}
          onPress={add}>
          
        </Button>
      </View>
      <View style={styles.button}>
        <Button
          title={'Get'}
          onPress={get}>

        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 40,
    marginBottom: 30
  },
  button: {
    margin: 20,
    width: 250,

  },
  inputStyle:{
    width:'90%',
    borderWidth:2,
    borderColor:'lightblue',
    height:50,
    borderRadius:8,
    elevation:4,
    backgroundColor:'#fff',
    paddingLeft:20,
    paddingRight:20

  },

});