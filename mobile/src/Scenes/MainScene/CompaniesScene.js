import React, { PureComponent } from 'react';

import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from 'react-native';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { ErrorScene, CompanyList } from '../../components';

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
  query Companies {
    companies {
      id
      color
      name
      image
    }
  }
`;
export default class CompaniesScene extends PureComponent {
  static navigationOptions = {
    title: 'Companies',
  };

  render() {
    // todo: 2. would be cool if we actually queried the graphql server for companies and displayed them here.
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Query query={query}>
          {({ loading, error, data }) => {
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return <ErrorScene message={error.message} />;
            }

            return (
              <FlatList
                data={data.companies}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CompanyScene', { id: item.id })
                    }
                  >
                    <CompanyList company={item} />
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
              />
            );
          }}
        </Query>
      </View>
    );
  }
}
