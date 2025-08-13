import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { typography } from '@/theme/typography'
import { dropShadow } from '@/theme/drop-shadow'
import ProgressBar from './progress-bar'
import { useTransactionContext } from '@/context/TransactionContext'



const FinanceOverviewCard = () => {
	const { balance, formatCurrency, budget } = useTransactionContext()

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

	const currentMonth = monthNames[new Date().getMonth()]
 
	const remaining = budget - balance.expenses

    // this prevents divison by zero if the budget is actually 0
	const progress = Math.min(balance.expenses / budget, 1)

  return (
    <View style={[dropShadow.shadow, styles.container]}>
        <Text style={[typography.heading, {fontSize: 26, color: 'black', marginBottom: 4}]}>
            {currentMonth}
        </Text>
        <Text style={[typography.body, {fontSize: 22, color: 'black'}]}>
            {formatCurrency(remaining)} Remaining
        </Text>
        <View>
            <ProgressBar progress={progress}/>
        </View>
    </View>
  )
}

export default FinanceOverviewCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 232,
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderBottomWidth: 10,
        gap: 8,
    }
})