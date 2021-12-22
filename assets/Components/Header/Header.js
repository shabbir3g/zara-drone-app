import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import logo from '../../logo.png'
import menu from '../../menu.png'

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Image style={styles.menu} source={menu} />
    </View>
  );
};

export default Header;