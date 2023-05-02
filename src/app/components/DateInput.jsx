import { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import CustomInput from './CustomInput';
import { assets } from '../../assets/assets';

const DateInput = ({ onChange }) => {
  const [date, setDate] = useState(new Date());
  const [dateString, setDateString] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onChange(dateString);
  }, [dateString]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setOpen(true)}>
        <CustomInput
          value={dateString ? dateString : 'Data calendaristică'}
          leftImage={assets.dateIcon}
          disabled={true}
          onPress={() => setOpen(true)}
        />
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        locale="ro"
        confirmText="Confirmare"
        cancelText="Anulare"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setDateString(date.toISOString().substring(0, 10));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    color: 'black',
  },
});
