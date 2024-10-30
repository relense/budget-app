import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type MonthItem = {
  id: string;
  label: string;
};

const monthItems: MonthItem[] = [
  { id: "1", label: "January" },
  { id: "2", label: "February" },
  { id: "3", label: "March" },
  { id: "4", label: "April" },
  { id: "5", label: "May" },
  { id: "6", label: "June" },
  { id: "7", label: "July" },
  { id: "8", label: "August" },
  { id: "9", label: "September" },
  { id: "10", label: "October" },
  { id: "11", label: "November" },
  { id: "12", label: "December" },
];

const MonnthDropDown = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("9");

  const renderPressablePicker = () => {
    const selectedItem = monthItems.find((item) => item.id === selectedValue);

    return (
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>
          {selectedItem ? selectedItem.label : "Select an option"}
        </Text>
        <FontAwesome name={"chevron-down"} size={12} color="#B5B5B5" />
      </TouchableOpacity>
    );
  };

  const renderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(value) => {
                setSelectedValue(value);
                setModalVisible(false);
              }}
            >
              {monthItems.map((item: MonthItem) => (
                <Picker.Item key={item.id} label={item.label} value={item.id} />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      {renderPressablePicker()}
      {renderModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
  },
  dropdown: {
    flex: 1,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdownText: {
    fontSize: 14,
    color: "#B5B5B5",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pickerContainer: {
    backgroundColor: "white",
    margin: 20,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default MonnthDropDown;
