import { Pressable, StyleSheet, Text, View } from "react-native";
import MonnthDropDown from "../../components/MonthDropdown/MonthDropdown";

const AvailableExpensesView = ({
  categories,
  goToCreateCategory,
}: {
  categories: any;
  goToCreateCategory: () => void;
}) => {
  const renderCategories = () => {
    return categories.map((item: any) => (
      <View key={item.id} style={styles.categoryContainer}>
        <View style={styles.iconContainer} />
        <View style={styles.descriptionMainContainer}>
          <View style={styles.descriptionContainer}>
            <Text>{item.name}</Text>
            <Text>€192.5</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text>Available</Text>
            <Text>35%</Text>
          </View>
        </View>
      </View>
    ));
  };

  const renderAddNewCategory = () => {
    return (
      <View style={styles.categoryContainer}>
        <View style={styles.iconContainer} />
        <Pressable
          style={styles.descriptionMainContainer}
          onPress={() => goToCreateCategory()}
        >
          <View style={styles.descriptionContainer}>
            <Text>New budget category</Text>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <MonnthDropDown />
      <View style={styles.contentContainer}>
        {renderAddNewCategory()}
        {renderCategories()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    display: "flex",
    flex: 1,
    gap: 12,
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
    paddingLeft: 24,
    paddingRight: 24,
  },
  iconContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "#D2FFD8",
  },
  descriptionMainContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },
  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AvailableExpensesView;
