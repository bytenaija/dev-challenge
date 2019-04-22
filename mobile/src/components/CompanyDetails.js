import React, { memo } from 'react';
import {
 View, StyleSheet, Image, ImageBackground 
} from 'react-native';
import {
 Button, Card, Title, Paragraph, Text 
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Address from './Address';
import MapView from './MapView';

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
    color: '#770000',
    textAlign: 'center',
  },
  textEmail: {
    fontSize: 18,
    color: '#fff',
  },
});

export default memo(({ company }) => (
  <View>
    <Card>
      <Card.Content>
        <ImageBackground
          source={{ uri: `${company.image}?random=${company.id}` }}
          style={{
            width: '100%',
            height: 200,
            resizeMode: 'contain',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.9)',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <Title style={[styles.textName, { color: company.color }]}>
              {company.name} 
{' '}
{company.suffice}
            </Title>
            <Paragraph style={styles.textEmail}>{company.bs}</Paragraph>
            <Paragraph style={[styles.textEmail, { fontSize: 14 }]}>
              {company.catchPhrase}
            </Paragraph>
            <Address address={company.address} color="#fff" />
          </View>
        </ImageBackground>
        <MapView
          longitude={company.address.longitude}
          latitude={company.address.latitude}
        />
      </Card.Content>
    </Card>
  </View>
));
