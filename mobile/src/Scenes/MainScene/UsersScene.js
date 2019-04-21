import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { ErrorScene, UserList } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

const query = gql`
  query Users {
    users {
      id
      color
      name
      email
      image
    }
  }
`;

export default class UsersScene extends PureComponent {
  static navigationOptions = {
    title: 'Users',
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#6200EE" barStyle="light-content" />
        <Query query={query}>
          {({ loading, error, data }) => {
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              console.log(error);
              return <ErrorScene message={error.message} />;
            }

            return (
              <FlatList
                data={data.users}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('UserScene', { id: item.id })
                    }
                  >
                    <UserList user={item} />
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={() => <View style={styles.line} />}
              />
            );
          }}
        </Query>
      </View>
    );
  }
}
