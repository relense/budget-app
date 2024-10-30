import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationItem } from "../../app/(app)/(tabs)/expenses/_layout";

const ExpensesHeader = ({
  navigationItems,
  selectedtNavigationItem,
  updateNavigationItem,
}: {
  navigationItems: NavigationItem[];
  selectedtNavigationItem: NavigationItem;
  updateNavigationItem: (item: NavigationItem) => void;
}) => {
  const renderNavigationItems = () => {
    return (
      <View style={styles.navigationContainer}>
        {navigationItems.map((item) => (
          <TouchableOpacity
            style={
              item.label === selectedtNavigationItem.label &&
              styles.selectedItem
            }
            onPress={() => updateNavigationItem(item)}
          >
            <Text
              style={[
                styles.navigationItem,
                item.label === selectedtNavigationItem.label &&
                  styles.selectedItemText,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>€282.87</Text>
        <View>
          <Text style={styles.title}>Total Balance</Text>
        </View>
      </View>
      {renderNavigationItems()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "white",
    gap: 12,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "regular",
  },
  navigationContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    alignItems: "center",
    // iOS shadow properties
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 10 }, //
    shadowOpacity: 0.8,
    shadowRadius: 10,
    // Android shadow (elevation)
    elevation: 20,
  },
  navigationItem: {
    fontSize: 14,
    fontWeight: "regular",
    padding: 10,
  },
  selectedItem: {
    backgroundColor: "black",
    borderRadius: 12,
  },
  selectedItemText: {
    color: "white",
  },
});

export default ExpensesHeader;
