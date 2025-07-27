import { Pressable, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'
import { typography } from '@/theme/typography';
import InputContainer from '@/components/login-screen-components/inputContainer';
import LoginButton from '@/components/login-screen-components/loginButton';

import { useRouter } from 'expo-router';
import * as yup from "yup"
import { Formik } from 'formik'


interface LoginFormValues {
    emailAddress: string,
    password: string,
}

const LoginFormSchema = yup.object().shape({
    emailAddress: yup.string()
        .email("Invalid Email")
        .required("Email is Required"),
    password: yup.string()
        .min(6, "Invalid Password")
        .required("Password is Required")
})


const Login = () => {
    const router = useRouter();

    const handleSubmit = (values: LoginFormValues) => {
        // firebase logic here
    }

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
        <Formik<LoginFormValues>
            initialValues={{ emailAddress: "", password: ""}}
            validationSchema={LoginFormSchema}
            onSubmit={handleSubmit}
        >   
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors, 
                touched
            }) => (
                <View style={{gap: 12}}>
                    <InputContainer 
                        placeholder='Email Address' 
                        onChangeText={handleChange('emailAddress')}
                        onBlur={handleBlur('emailAddress')}
                        value={values.emailAddress}

                    />

                    {touched.emailAddress && errors.emailAddress && <Text style={[typography.body, {color: 'red', textAlign: 'right'}]}>{errors.emailAddress}</Text>}

                    <InputContainer 
                        placeholder='Password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    {touched.password && errors.password && <Text style={[typography.body, {color: 'red', textAlign: 'right'}]}>{errors.password}</Text>}

                    <Text 
                        style={[typography.body, {textAlign: 'right', color: "#FFFFFF", marginTop: 4, fontSize: 16}]}
                    >
                        Forgot Password?
                    </Text>

                    <View style={{marginTop: 12}}>
                        <LoginButton handlePress={handleSubmit}  />
                    </View>
                </View>
            )}
        </Formik>
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