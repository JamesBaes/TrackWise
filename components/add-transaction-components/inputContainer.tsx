import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { typography } from '@/theme/typography'
import { dropShadow } from '@/theme/drop-shadow'

interface inputValues {
  placeholder?: string,
  value: string, 
  onChangeText: any,
  onBlur: any,
}

const InputContainer = ({placeholder, value, onChangeText, onBlur}: inputValues) => {
  return (
    <TextInput
      style={[typography.body, styles.text, dropShadow.shadow, styles.container]}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onBlur={onBlur}
    >
    </TextInput>
  )
}

export default InputContainer

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        backgroundColor: "transparent",
        borderRadius: 8,
        padding: 12,
        borderColor: "black",
        borderWidth: 1,
        alignItems: "flex-start"
    },
    text: {
        color: "gray",
        fontSize: 14
    }
})