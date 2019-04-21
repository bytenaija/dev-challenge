import React, { memo } from 'react';
import {
 View, Text, StyleSheet, Image 
} from 'react-native';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  userList: {
    flexDirection: 'row',
    padding: 20,
  },
  imageWrapper: {
    marginRight: 20,
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
  text: {
    flexDirection: 'column',
    width: '80%',
  },
  textName: {
    fontSize: 24,
  },
  textEmail: {
    fontSize: 18,
  },
  paper: {
    flexDirection: 'row',
    position: 'relative',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default memo(({ user, mini }) => (
  <View style={styles.userList}>
    <View
      style={[
        styles.imageWrapper,
        {
          borderColor: user.color,
          width: mini ? 45 : 80,
          height: mini ? 45 : 80,
        },
      ]}
    >
      <Image
        style={[
          styles.image,
          { width: mini ? 45 : 80, height: mini ? 45 : 80 },
        ]}
        source={{ uri: user.image }}
      />
    </View>
    <View style={styles.paper}>
      <View style={styles.text}>
        <Text style={[styles.textName, { fontSize: mini ? 18 : 24 }]}>
          {user.name}
        </Text>
        <Text style={[styles.textEmail, { fontSize: mini ? 16 : 18 }]}>
          {user.email}
        </Text>
      </View>
      <Button icon="chevron-right" style={{ width: 10 }} />
    </View>
  </View>
));
