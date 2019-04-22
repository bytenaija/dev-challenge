import React, { PureComponent } from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from 'react-native';
import { Text } from 'react-native-paper';
import { Query } from 'react-apollo';
import { ErrorScene, UserList, CompanyDetails } from '../../components';
import { COMPANY } from '../../graphql';

export default class CompanyScene extends PureComponent {
  static navigationOptions = {
    headerTitle: 'Company',
  };

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    return (
      <View>
        <Query query={COMPANY} variables={{ id }}>
          {({ loading, error, data }) => {
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return <ErrorScene message={error.message} />;
            }

            return (
              <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
                <CompanyDetails
                  company={data.company}
                  navigation={navigation}
                />
                <Text color="primary">
                  Employees 
{' '}
{data.company.employees.length}
{' '}
:
</Text>
                {data.company.employees.length ? (
                  <View>
                    <FlatList
                      data={data.company.employees}
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
                    <Text>This company has no Employees</Text>
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
