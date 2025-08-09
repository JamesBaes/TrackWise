import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { typography } from '@/theme/typography'
import { dropShadow } from '@/theme/drop-shadow'



const BalanceCard = () => {
  return (
    <View style={[styles.container, dropShadow.shadow]}>
        <View style={{}}>
            <Text style={[typography.heading, {fontSize: 24, color: 'black'}]}>
                My Balance
            </Text>
            <Text style={[typography.body, {fontSize: 24, color: 'black'}]}>
                $2012.13
            </Text>
        </View>
        <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
            <View>
                <Text style={[typography.heading, {fontSize: 22, color: 'black'}]}>
                    Income
                </Text>
                <Text style={[typography.body, {fontSize: 22, color: "#2C6F00"}]}>
                    +$1307.18
                </Text>
            </View>
            <View>
                <Text style={[typography.heading, {fontSize: 22, color: 'black'}]}>
                    Expenses
                </Text>
                <Text style={[typography.body, {fontSize: 22, color: "#B40000"}]}>
                    -$500.20
                </Text>
            </View>
        </View>
    </View>
  )
}

export default BalanceCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 224,
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderBottomWidth: 10
    },

})