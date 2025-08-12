import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { typography } from '@/theme/typography';
import InputContainer from '@/components/login-screen-components/inputContainer';
import SignUpButton from '@/components/signup-page-components/signUpButton';

import * as yup from 'yup';
import { Formik } from 'formik'
import { useAuth } from '@/context/AuthContext';


interface SignUpFormValues {
    fullName: string,
    emailAddress: string,
    password: string, 
    confirmPassword: string
}

const signUpSchema = yup.object().shape({
    fullName: yup.string()
        .required(),
    emailAddress: yup.string()
        .email("Invalid Email")
        .required("Email is Required"),
    password: yup.string()
        .min(6, "The password must contain at least 6 characters")
        .required("Password is Required"),
    confirmPassword: yup.string()
        .oneOf( [yup.ref('password')], 'Passwords must match')
        .required("Confirm Password is Required"),
})




const SignUp = () => {
    const router = useRouter();
    const { signUp } = useAuth();

    const handleSubmit = async (values: SignUpFormValues) => {
        try {
            await signUp(values.fullName, values.emailAddress, values.password);
            router.navigate("/screens/(tabs)");
        } catch (error) {
            console.error("Signup failed:", error);
        }
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
        
         <Text style={[typography.heading, styles.title]}>Create Account</Text>
        
        {/* Form for signing up */}
        <Formik<SignUpFormValues>
            initialValues={{fullName: "",emailAddress: "", password: "", confirmPassword: ""}}
            validationSchema={signUpSchema}
            onSubmit={handleSubmit}
        >
            {({
                handleChange,
                handleBlur,
                values,
                handleSubmit,
                errors, 
                touched
            }) => (
                <View style={{gap: 12,}}>
                    <InputContainer 
                        placeholder='Full Name' 
                        onChangeText={handleChange('fullName')}
                        onBlur={handleBlur('fullName')}
                        value={values.fullName} 
                        secureTextEntry={false}
                    />
                    {touched.fullName && errors.fullName && <Text style={[typography.body, {color: 'red', textAlign: 'right'}]}>{errors.fullName}</Text>}

                    <InputContainer 
                        placeholder='Email Address' 
                        onChangeText={handleChange('emailAddress')}
                        onBlur={handleBlur('emailAddress')}
                        value={values.emailAddress} 
                        secureTextEntry={false}
                    />
                    {touched.emailAddress && errors.emailAddress && <Text style={[typography.body, {color: 'red', textAlign: 'right'}]}>{errors.emailAddress}</Text>}
                    
                    <InputContainer 
                        placeholder='Password'
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password} 
                        secureTextEntry={true}
                    />
                    {touched.password && errors.password && <Text style={[typography.body, {color: 'red', textAlign: 'right'}]}>{errors.password}</Text>}
                
                    <InputContainer 
                        placeholder='Confirm Password'
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword} 
                        secureTextEntry={true}
                    />
                    {touched.confirmPassword && errors.confirmPassword && <Text style={[typography.body, {color: 'red', textAlign: 'right'}]}>{errors.confirmPassword}</Text>}

                    <View style={{marginTop: 12}}>
                        <SignUpButton handlePress={handleSubmit}/>
                    </View>
                </View>
            )}
        </Formik>
            
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