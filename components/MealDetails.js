import { StyleSheet, Text, View } from 'react-native';

const MealDetails = ({duration, complexity, affordability, style, textStyle}) => {
  return (
    <View style={[styles.detailContainer, style]}>
      <Text style={[styles.detailText, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailText, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailText, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailText: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
