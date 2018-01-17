import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return(
    <View style={ headerContainer }>
        <Text style={ header }>CryptoTracker</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 55,
    display: "flex",
    alignItems: "center"
  },
  header: {
    fontWeight: "bold",
    fontSize: 20
  }
});

const { headerContainer, header } = styles;

export default Header;
