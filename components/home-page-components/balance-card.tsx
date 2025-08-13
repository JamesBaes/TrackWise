import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { typography } from '@/theme/typography'
import { dropShadow } from '@/theme/drop-shadow'
import { useTransactionContext } from '@/context/TransactionContext'


const BalanceCard = () => {
    const { balance, formatCurrency} = useTransactionContext();
    

  return (
    <View style={[styles.container, dropShadow.shadow]}>
        <View>
            <Text style={[typography.heading, {fontSize: 24, color: 'black'}]}>
                My Balance
            </Text>
            <Text style={[typography.body, {fontSize: 24, color: 'black'}]}>
                {formatCurrency(balance.total)}
            </Text>
        </View>
        <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
            <View>
                <Text style={[typography.body, {fontWeight: '500',fontSize: 22, color: 'black'}]}>
                    Income
                </Text>
                <Text style={[typography.body, {fontSize: 22, color: "#2C6F00"}]}>
                    +{formatCurrency(balance.income)}
                </Text>
            </View>
            <View>
                <Text style={[typography.body, {fontSize: 22, fontWeight: '500', color: 'black'}]}>
                    Expenses
                </Text>
                <Text style={[typography.body, {fontSize: 22, color: "#B40000"}]}>
                    -{formatCurrency(balance.expenses)}
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