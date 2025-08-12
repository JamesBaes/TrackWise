import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { typography } from '@/theme/typography'
import { dropShadow } from '@/theme/drop-shadow'

interface inputValues {
  placeholder: string,
  value: string, 
  onChangeText: any,
  onBlur: any,
  secureTextEntry: boolean
}

const InputContainer = ({placeholder, value, onChangeText, onBlur, secureTextEntry}: inputValues) => {
  return (
    <TextInput
      style={[typography.body, styles.text, dropShadow.shadow, styles.container]}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onBlur={onBlur}
      secureTextEntry={secureTextEntry}
    >
    </TextInput>
  )
}

export default InputContainer

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 56,
        backgroundColor: "transparent",
        borderRadius: 8,
        padding: 12,
        borderColor: "#FFFFFF",
        borderWidth: 1,
        alignItems: "flex-start"
    },
    text: {
        color: "#FFFFFF",
        fontSize: 16,
    }
})