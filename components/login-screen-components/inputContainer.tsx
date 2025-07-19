import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { typography } from '@/theme/typography'
import { dropShadow } from '@/theme/drop-shadow'

const InputContainer = ({placeholder}: {placeholder: string}) => {
  return (
    <View style={[dropShadow.shadow, styles.container]}>
        <Text style={[typography.body, styles.text]}>{placeholder}</Text>
    </View>
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