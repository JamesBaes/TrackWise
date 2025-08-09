import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    progress: number
}

const ProgressBar = ( { progress }: Props) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${Math.min(Math.max(progress, 0) * 100)}%` }]} />
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 38,
        backgroundColor: 'white',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'black',
        overflow: 'hidden',
        justifyContent: "center",
    },
    progress: {
        height: '100%',
        backgroundColor: '#6088C4',
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12
    }
})