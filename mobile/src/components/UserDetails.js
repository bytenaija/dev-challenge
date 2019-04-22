import React, { memo } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
 Button, Card, Title, Paragraph 
} from 'react-native-paper';

import Address from './Address';
import CompanyList from './CompanyList';

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

export default memo(({ user, navigation }) => (
  <View>
    <Card>
      <Card.Content>
        <ImageBackground
          source={{ uri: `https://picsum.photos/700?random=${user.id}` }}
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
              backgroundColor: 'rgba(0,0,0,0.6)',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <View style={[styles.imageWrapper, { borderColor: user.color }]}>
              <Image style={styles.image} source={{ uri: user.image }} />
            </View>
            <Title style={styles.textName}>{user.name}</Title>
            <Paragraph style={styles.textEmail}>{user.email}</Paragraph>
          </View>
        </ImageBackground>
        <View>
          {user.company && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => navigation.navigate('CompanyScene', {
                    id: user.company.id,
                  })
                }
              >
                <CompanyList company={user.company} mini />
              </TouchableOpacity>
            </View>
          )}
          <Address address={user.address} />
        </View>
      </Card.Content>
      <Card.Actions
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          icon="edit"
          onPress={() => navigation.navigate('UpdateUserScene', {
              user,
            })
          }
        >

          Edit
</Button>
      </Card.Actions>
    </Card>
  </View>
));
