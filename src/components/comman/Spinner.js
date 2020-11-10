import React from 'react';
import {StyleSheet,View,Text,ActivityIndicator} from 'react-native';


const Spinner = ({size}) => {

    const {spinnerSyle}=styles;
  return (
   <View style={spinnerSyle}>
        <ActivityIndicator size={size || 'large'} color='red'/>
       
    </View>
  )
};

const styles=StyleSheet.create({
  
    spinnerSyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
       
    }
    
   
});

export {Spinner};