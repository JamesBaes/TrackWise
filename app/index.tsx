import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { typography } from '@/theme/typography'
import LoginButton from '@/components/landing-page-components/loginButton'
import SignUpButton from '@/components/landing-page-components/signUpButton'
import { useRouter } from 'expo-router'


const LandingPage = () => {

    const router = useRouter();

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

        {/* Login and Sign up buttons */}
        <View style={{gap: 12, marginTop: 36}}>
            <LoginButton handlePress={() => router.push("/screens/log-in-screen")} />
            <SignUpButton handlePress={() => router.push("/screens/sign-up-screen")}/> 
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
        marginTop: 142
    },
    title: {
        fontSize: 36,
        textAlign: 'center',
        letterSpacing: 0.5,
        color: '#FFFFFF',
        marginTop: 20
    }
})