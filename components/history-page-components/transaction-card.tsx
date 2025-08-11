import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { typography } from '@/theme/typography'
import { dropShadow } from '@/theme/drop-shadow'
import TransactionItem from './transaction-item'
import { TransactionType } from '@/types'

type TransactionCardProps = {
  date: Date,
  transactions: TransactionType[]
}

const TransactionCard = ({ date, transactions }: TransactionCardProps) => (
  <View style={[styles.container, dropShadow.shadow]}>
    <Text style={[typography.heading, styles.date]}>{date.toDateString()}</Text>
    <View style={{width: '100%', height: 1, backgroundColor: 'black', marginVertical: 4}} />
    {transactions.map((tx, idx) => (
      <TransactionItem key={idx} {...tx} />
    ))}
  </View>
)

export default TransactionCard

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderBottomWidth: 8,
    padding: 16,
    marginBottom: 12,
    gap: 8,
  },
  date: {
    color: "black",
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 4,
  },
})