import { StyleSheet, Text, View } from 'react-native';

const List = ({ data }) => {
  return data.map((datapoint, index) => (
    <View key={index} style={styles.listContainer}>
      <Text style={styles.list}>{datapoint}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listContainer: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: 'white',
  },
  list: {
    color: '#32405C',
    textAlign: 'center',
  },
});
