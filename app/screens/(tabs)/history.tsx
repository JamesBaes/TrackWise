import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import TransactionCard from '@/components/history-page-components/transaction-card'
import { typography } from '@/theme/typography'
import { useTransactionContext } from '@/context/TransactionContext'

const HistoryPage = () => {

  const context = useTransactionContext();
  const transactions = context?.transactions || [];

  {/* Grouping transactions by date*/}
  const groupedTransactions = transactions.reduce((acc, transaction) => {
    const dateString = transaction.date.toDateString();
    if (!acc[dateString]) acc[dateString] = [];
    acc[dateString].push(transaction);
    return acc;
  }, {} as Record<string, typeof transactions>);
  
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
          {Object.entries(groupedTransactions)
            .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime())
            .map(([date, transactions]) => {

            // I had to add one day for display since it would show one day behind from the actual addded transaction date
            const displayDate = new Date(transactions[0].date)
            displayDate.setDate(displayDate.getDate() + 1)
            return(
            <TransactionCard key={date} date={displayDate} transactions={transactions} />
          )})}
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