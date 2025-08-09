import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { typography } from '@/theme/typography'
import { useRouter } from 'expo-router'
import { Category } from '@/types'


const CategoryCard = ({category, categoryColor, budget, balance}: Category) => {

    const router = useRouter();
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <View style={{width: 32, height: 32, borderRadius: 32, backgroundColor: categoryColor}}>
            </View>
            <Text style={[typography.heading, styles.categoryName]}>{category}</Text>
        </View>
        <View style={{gap: 4}}>
            <Text style={[typography.body, styles.bodyText]}>Allocated Budget: ${budget}</Text>
            <Text style={[typography.body, styles.bodyText]}>Category Balance: ${balance}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
            <Pressable 
                style={styles.button}
                onPress={() => router.replace("/screens/add-transaction-screen")} 
            >
                <Text style={styles.buttonText}>Add Transaction</Text> 
            </Pressable>
        </View>
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 186,
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 1,
        borderBottomWidth: 10,
        padding: 12,
        gap: 8,
        alignItems: 'center',
    },
    categoryName: {
        color: 'black',
        fontSize: 26,
    },
    bodyText: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500'
    },
    button: {
        backgroundColor: 'black',
        width: 172,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 8

    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})