import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SelectBarItem from './SelectBarItem';

const SelectBar = ({ onChange, itemList }) => {
  const [active, setActive] = useState(1);

  const toggleActive = item => {
    setActive(item);
    onChange(item);
  };
  return (
    <View style={styles.container}>
      {itemList.length > 0 &&
        itemList.map((text, index) => {
          return (
            <SelectBarItem
              key={index}
              text={text}
              onPress={() => toggleActive(index + 1)}
              isActive={active === index + 1}
            />
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9F9',
    flexDirection: 'row',
  },
});

export default SelectBar;
