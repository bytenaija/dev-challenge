import React, { Component } from 'react';

import { Mutation } from 'react-apollo';

import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import {
  Button,
  Card,
  Title,
  Paragraph,
  Text,
  TextInput,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ErrorScene, Address } from '../../components';

import { UPDATE_USER, USER } from '../../graphql';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  line: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

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

export default class UpdateUserScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Edit User',
  };

  state = {
    id: '',
    name: '',
    email: '',
  };

  componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    this.setState({ ...user });
  }

  render() {
    const { navigation } = this.props;
    const {
 email, name, id, color, image 
} = this.state;
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behaviour="padding"
        enabled
      >
        <StatusBar backgroundColor="#6200EE" barStyle="light-content" />
        <Card>
          <Card.Content>
            <ImageBackground
              source={{ uri: `https://picsum.photos/700?random=${id}` }}
              style={{
                width: '100%',
                height: 200,
                resizeMode: 'contain',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 10,
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
                <View style={[styles.imageWrapper, { borderColor: color }]}>
                  <Image style={styles.image} source={{ uri: image }} />
                </View>
                <Title style={styles.textName}>{name}</Title>
                <Paragraph style={styles.textEmail}>{email}</Paragraph>
              </View>
            </ImageBackground>
          </Card.Content>
        </Card>

        <Mutation
          mutation={UPDATE_USER}
          refetchQueries={() => [
            {
              query: USER,
              variables: { id },
            },
          ]}
        >
          {(updateUser, { data: dataTwo }, refetch) => (
            <View>
              <TextInput
                mode="outlined"
                label="Name"
                onChangeText={nameText => this.setState({ name: nameText })}
                value={name}
              />

              <TextInput
                mode="outlined"
                label="Email"
                onChangeText={emailText => this.setState({ email: emailText })}
                value={email}
              />
              <Button
                onPress={() => {
                  updateUser({
                    variables: {
                      id,
                      name,
                      email,
                    },
                  });

                  navigation.navigate('UserScene', { id });
                }}
              >

                Update User
</Button>
            </View>
          )}
        </Mutation>
      </KeyboardAvoidingView>
    );
  }
}
