import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { typography } from '@/theme/typography'
import { dropShadow } from '@/theme/drop-shadow'

const LoginButton = () => {
  return (
    <View style={[dropShadow.shadow, styles.container]}>
      <Text style={[typography.button, styles.text]}>Login</Text>
    </View>
  )
}

export default LoginButton

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 56,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        padding: 12,
        alignItems: 'center'
    },

    text: {
        color: "black",
        fontSize: 16,
    }
})