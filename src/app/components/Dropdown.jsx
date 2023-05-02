import { Image, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const Dropdown = ({ data, icon, onChange }) => {
  return (
    <SelectDropdown
      data={data}
      defaultButtonText="Tip document"
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem.den;
      }}
      rowTextForSelection={(item, index) => {
        return item.den;
      }}
      onSelect={(selectedItem, index) => {
        onChange(selectedItem.cod);
      }}
      buttonStyle={styles.button}
      buttonTextStyle={styles.text}
      selectedRowTextStyle={styles.selectedRowText}
      dropdownIconPosition="left"
      renderDropdownIcon={() => {
        return <Image source={icon} style={styles.icon} />;
      }}
    />
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: '#A6B4BC',
    width: '94%',
    marginBottom: '8%',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 16,
    color: '#A6B4BC',
    // color: '#273238',
    textAlign: 'left',
    marginHorizontal: '5%',
  },
  selectedRowText: {
    fontWeight: 'bold',
  },
  icon: {
    resizeMode: 'contain',
  },
});
