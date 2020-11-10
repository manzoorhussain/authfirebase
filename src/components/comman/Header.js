/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text,View} from 'react-native';

const Header = ({headerText}) => {
  return (
     <View style={styles.viewStyle}> 
    <Text style={styles.textStyle}>{headerText}</Text>
  </View>
  )
};

const styles=StyleSheet.create({
  viewStyle:{
   
    backgroundColor:'#F8F8F8', //#F8F8F8
    justifyContent:'center',
    alignItems:'center',
    height:60,
    padding:15,
    shadowColor:'black', //#000
    shadowOffset:{width:0,height:6},
    shadowOpacity:0.9


  },
  textStyle:{
    fontSize:20

  }

});

export {Header}
