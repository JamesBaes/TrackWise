import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { typography } from '@/theme/typography';
import InputContainer from '@/components/login-screen-components/inputContainer';
import SignUpButton from '@/components/signup-page-components/signUpButton';

const SignUp = () => {
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
        
         <Text style={[typography.heading, styles.title]}>Create Account</Text>
        
        {/* Form for signing up */}
        <View style={{gap: 12,}}>
            <InputContainer placeholder='Email Address' />
            <InputContainer placeholder='Password' />
            <InputContainer placeholder='Confirm Password' />
            <View style={{marginTop: 12}}>
                <SignUpButton />
            </View>
        </View>

    </LinearGradient>
  )
}

export default SignUp

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