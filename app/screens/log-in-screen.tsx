import { Pressable, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'
import { useRouter } from 'expo-router';
import { typography } from '@/theme/typography';
import InputContainer from '@/components/login-screen-components/inputContainer';
import LoginButton from '@/components/login-screen-components/loginButton';

const Login = () => {
    const router = useRouter();
  return (
    <LinearGradient 
          style={styles.container}
          colors={["#6088C4", "#A4B9DA"]}
          locations={[0.21, 1]}
    >   
        {/* Back button */}
        <Pressable onPress={() => router.replace('/')}>
            <AntDesign name="back" size={28} color="white" style={{position: 'fixed', top: 15, left: 15}}/>
        </Pressable>

        <Text style={[typography.heading, styles.title]}>Login</Text>
        
        {/* Form for logging in */}
        <View style={{gap: 12,}}>
            <InputContainer placeholder='Email Address' />
            <InputContainer placeholder='Password' />
            <Text 
             style={[typography.body, {textAlign: 'right', color: "#FFFFFF", marginTop: 4, fontSize: 16}]}
            >
                Forgot Password?
            </Text>
            <View style={{marginTop: 12}}>
                <LoginButton />
            </View>
        </View>

    </LinearGradient>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        marginVertical: 122,
        color: '#FFFFFF',
        fontSize: 32,
        letterSpacing: 0.5,
        textAlign: 'center'
    }
})