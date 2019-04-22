import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from 'react-native';
import { Text } from 'react-native-paper';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import {
 ErrorScene, UserList, UserDetails, MapView 
} from '../../components';
import { USER } from '../../graphql';

export default class UserScene extends PureComponent {
  static navigationOptions = {
    headerTitle: 'User',
  };

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    return (
      <View>
        <Query query={USER} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return <ErrorScene message={error.message} />;
            }

            return (
              <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
                <UserDetails user={data.user} navigation={navigation} />
                <MapView
                  longitude={data.user.address.longitude}
                  latitude={data.user.address.latitude}
                />
                <Text color="primary">
                  Friends 
{' '}
{data.user.friends.length}
{' '}
:
</Text>
                {data.user.friends.length ? (
                  <View>
                    <FlatList
                      data={data.user.friends}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          onPress={() => navigation.navigate('UserScene', { id: item.id })
                          }
                        >
                          <UserList user={item} mini />
                        </TouchableOpacity>
                      )}
                      keyExtractor={item => item.id}
                    />
                  </View>
                ) : (
                  <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Text>This user has not added any friends</Text>
                  </View>
                )}
              </ScrollView>
            );
          }}
        </Query>
      </View>
    );
  }
}
