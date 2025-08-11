import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { typography } from '@/theme/typography'
import { TransactionType } from '@/types'

const TransactionItem = ({ transactionName, category, amount }: TransactionType) => (
  <View>
    <View style={styles.row}>
      <Text style={[typography.body, styles.transactionName]}>{transactionName}</Text>
      <Text style={[
        typography.body,
        styles.amount,
        { color: amount < 0 ? '#b11b1bff' : '#2C6F00' }
      ]}>
        {amount < 0 ? `-$${Math.abs(amount).toFixed(2)}` : `+$${amount.toFixed(2)}`}
      </Text>
    </View>
    <View style={styles.categoryRow}>
      <View style={[
        styles.colorDot,
        { backgroundColor: category.categoryColor }
      ]} />
      <Text style={[typography.body, styles.categoryText]}>
        {category.category}
      </Text>
    </View>
  </View>
)

export default TransactionItem

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionName: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  colorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  categoryText: {
    color: 'black',
    fontSize: 15,
  },
})