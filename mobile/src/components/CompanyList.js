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
    // borderRadius: 40,
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

export default memo(({ company, mini }) => (
  <View style={styles.userList}>
    {!mini && (
      <View
        style={[
          styles.imageWrapper,
          {
            borderColor: company.color,
          },
        ]}
      >
        <Image
          style={styles.image}
          source={{ uri: `${company.image}?random=${company.id}` }}
        />
      </View>
    )}
    <View style={styles.paper}>
      <View style={styles.text}>
        <Text style={styles.textName}>{company.name}</Text>
      </View>
      <Button icon="chevron-right" style={{ width: 10 }} />
    </View>
  </View>
));
