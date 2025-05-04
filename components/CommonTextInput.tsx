import {
  View,
  TextInput,
  StyleSheet,
  TextStyle,
  KeyboardTypeOptions,
} from 'react-native';
import React from 'react';

interface MyTextInputProps {
  title?: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  isError?: boolean;
  errorText?: string;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  disabled?: boolean;
  style?: TextStyle;
}

const CommonTextInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  maxLength,
  style,
  disabled,
  isError,
}: MyTextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        editable={!disabled}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        style={[styles.input, isError && styles.errorBorder, style]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginTop: 20,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  errorBorder: {
    borderColor: 'red',
  },
});

export default CommonTextInput;
