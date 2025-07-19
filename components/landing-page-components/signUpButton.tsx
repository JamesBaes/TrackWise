import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { typography } from '@/theme/typography'
import { dropShadow } from '@/theme/drop-shadow'

const SignUpButton = () => {
  return (
    <View style={[dropShadow.shadow, styles.container]}>
        <Text style={[typography.button, styles.text]}>Sign Up</Text>
    </View>
  )
}

export default SignUpButton

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 56,
        backgroundColor: "transparent",
        borderRadius: 8,
        padding: 12,
        borderColor: "#FFFFFF",
        borderWidth: 1,
        alignItems: "center"
    },
    text: {
        color: "#FFFFFF",
        fontSize: 16,
    }
})