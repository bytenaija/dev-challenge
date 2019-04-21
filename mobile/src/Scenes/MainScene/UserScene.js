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
import { ErrorScene, UserList, UserDetails } from '../../components';
import { USER } from '../../graphql';

export default class UserScene extends PureComponent {
  static navigationOptions = {
    headerTitle: 'User',
  };

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    // todo: 2. would be cool if we actually displayed full user data that is contained in the user data object.

    // todo: 3. would be extra cool to include their company info, and if you tap on it you can go that CompanyScene.
    // if this is done correctly, we should be re-using components from the CompaniesScene.

    // todo: 4. would be even cooler to see a list of their friends, so I can tap on them an get more info about that user.
    // todo: 5 would be cool to make the user name and email updateable and saved ot the database, so we can let our users change their info.
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
