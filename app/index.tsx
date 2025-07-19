import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { typography } from '@/theme/typography'
import LoginButton from '@/components/landing-page-components/loginButton'
import SignUpButton from '@/components/landing-page-components/signUpButton'


const LandingPage = () => {
  return (
    <LinearGradient 
      style={styles.container}
      colors={["#6088C4", "#A4B9DA"]}
      locations={[0.21, 1]}
    >
        <Image source={require('../assets/images/trackwise-logo.png')} style={styles.logo} />
        <View>
            <Text style={[typography.heading, styles.title]}>TrackWise</Text>
        </View>
        <View style={{gap: 12, marginTop: 36}}>
            <LoginButton />
            <SignUpButton /> 
        </View>


    </LinearGradient>
  )
}

export default LandingPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 280.63,
        height: 211.07,
        marginTop: 128
    },
    title: {
        fontSize: 36,
        textAlign: 'center',
        letterSpacing: 0.5,
        color: '#FFFFFF',
        marginTop: 20
    }
})