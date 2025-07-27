import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { typography } from '@/theme/typography'
import { dropShadow } from '@/theme/drop-shadow'

const SignUpButton = ({handlePress}: {handlePress: any}) => {
  return (
    <Pressable 
      style={[dropShadow.shadow, styles.container]}
      onPress={handlePress}
    >
        <Text style={[typography.button, styles.text]}>Sign Up</Text>
    </Pressable>
  )
}

export default SignUpButton

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