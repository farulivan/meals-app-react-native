import { StyleSheet, Text } from 'react-native';

const subtitle = ({ children }) => {
  return <Text style={styles.subtitle}>{children}</Text>;
};

export default subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: '#7DA1E8',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 12,
    padding: 8,
    textAlign: 'center',
    borderBottomColor: '#7DA1E8',
    borderBottomWidth: 2,
  },
});
