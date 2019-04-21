import React, { memo } from 'react';
import {
 View, StyleSheet, Image, ImageBackground 
} from 'react-native';
import {
 Button, Card, Title, Paragraph, Text 
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  userList: {
    flexDirection: 'row',
    padding: 20,
  },
  imageWrapper: {
    borderRadius: 40,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)',
    width: 80,
    height: 80,
    overflow: 'hidden',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },

  textName: {
    fontSize: 24,
    color: '#fff',
  },
  textEmail: {
    fontSize: 18,
    color: '#fff',
  },
});

export default memo(({ address }) => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}
  >
    <Text style={{ textAlign: 'center' }}>
      {address.streetAddress} 
{' '}
{address.streetSuffix} 
{' '}
{address.cityPrefix}
{' '}
      {address.city} 
{' '}
{address.citySuffix} 
{' '}
{address.county} 
{' '}
{address.zipCode}
{' '}
      {address.state} 
{' '}
{address.country}
    </Text>
  </View>
));
