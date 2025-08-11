import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
<<<<<<< Updated upstream
=======
import { LinearGradient } from 'expo-linear-gradient'
import TransactionCard from '@/components/history-page-components/transaction-card'
import { typography } from '@/theme/typography'

const mockTransactions = [
  {
    date: new Date(2025, 6, 8),
    transactionName: 'Starbucks',
    category: { category: 'Food and Drinks', categoryColor: '#FFAE00' },
    amount: -5.50
  },
  {
    date: new Date(2025, 6, 8),
    transactionName: 'Uber',
    category: { category: 'Transport', categoryColor: '#b11b1bff' },
    amount: -12.00
  },
  {
    date: new Date(2025, 6, 7),
    transactionName: 'Salary',
    category: { category: 'Income', categoryColor: '#2C6F00' },
    amount: 500.00
  },
  {
    date: new Date(2025, 6, 7),
    transactionName: 'Amazon',
    category: { category: 'Shopping', categoryColor: '#971391ff' },
    amount: -45.99
  }
]
>>>>>>> Stashed changes

const HistoryPage = () => {
  return (
    <View>
      <Text>HistoryPage</Text>
    </View>
  )
}

export default HistoryPage

const styles = StyleSheet.create({})