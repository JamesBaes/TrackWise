import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const HistoryPage = () => {
  return (
    <LinearGradient 
      style={styles.container}
      colors={["#6088C4", "#A4B9DA"]}
      locations={[0.21, 1]}
    >
      {/* Top Division with setting gear and mini trackwise logo*/}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingBottom: 10 }}>
        <Pressable>
          <Image source={require('@/assets/images/gear-icon.png')} />
        </Pressable>
        <Pressable>
          <Image source={require('@/assets/images/mini-logo.png')} />
        </Pressable>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 20}}
      >
        
      </ScrollView>



    </LinearGradient>
  )
}

export default HistoryPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    width: '100%'
  }
})