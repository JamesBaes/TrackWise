import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import TransactionCard from '@/components/history-page-components/transaction-card'
import { typography } from '@/theme/typography'

const mockTransactions = [
  {
    date: new Date(2025, 6, 8),
    transactionName: 'Starbucks',
    category: { categoryName: 'Food and Drinks', categoryColor: '#FFAE00' },
    amount: -5.50
  },
  {
    date: new Date(2025, 6, 8),
    transactionName: 'Uber',
    category: { categoryName
      : 'Transport', categoryColor: '#b11b1bff' },
    amount: -12.00
  },
  {
    date: new Date(2025, 6, 7),
    transactionName: 'Salary',
    category: { categoryName: 'Income', categoryColor: '#2C6F00' },
    amount: 500.00
  },
  {
    date: new Date(2025, 6, 7),
    transactionName: 'Amazon',
    category: { categoryName: 'Shopping', categoryColor: '#971391ff' },
    amount: -45.99
  }
]

const HistoryPage = () => {
  {/* Grouping transactions by date*/}
  const groupedTransactions = mockTransactions.reduce((acc, tx) => {
  const dateStr = tx.date.toDateString();
  if (!acc[dateStr]) acc[dateStr] = [];
  acc[dateStr].push(tx);
  return acc;
  }, {} as Record<string, typeof mockTransactions>);
  
  return (
    <LinearGradient 
      style={styles.container}
      colors={["#6088C4", "#A4B9DA"]}
      locations={[0.21, 1]}
    >
      {/* Top Division with setting gear and mini trackwise logo*/}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingBottom: 10 }}>
        <Pressable>
          <Image source={require('@/assets/images/gear-icon.png')} />
        </Pressable>
        <Pressable>
          <Image source={require('@/assets/images/mini-logo.png')} />
        </Pressable>
      </View>
      
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 20}}
      >

        <View style={{
          width: "100%",
          backgroundColor: 'white',
          borderRadius: 16,
          borderWidth: 1,
          borderBottomWidth: 8,
          padding: 16,
          marginBottom: 12,
          gap: 8,
        }}>
          <Text style={[typography.heading, { 
            color: "black",
            fontSize: 20,
            textAlign: 'center',
            marginBottom: 8,}]}>
              Transaction History
          </Text>
        </View>

        <View style={{gap: 8}}>
          {Object.entries(groupedTransactions).map(([date, txs]) => (
            <TransactionCard key={date} date={txs[0].date} transactions={txs} />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default HistoryPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    width: '100%'
  }
})