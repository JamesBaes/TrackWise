import { StyleSheet, Image, Text, View, Pressable, ScrollView } from "react-native";
import React from 'react'
import { LinearGradient } from "expo-linear-gradient"
import { typography } from "@/theme/typography";
import BalanceCard from "@/components/home-page-components/balance-card";
import FinanceOverviewCard from "@/components/home-page-components/finance-overview-card";

const HomePage = () => {
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

        <View style={styles.heading}>
          <Text style={[typography.heading, {fontSize: 32, color: 'white'}]}
          >
            Welcome, User!
          </Text>
        </View>

        <View style={styles.balanceCard}>
          <BalanceCard />
        </View>

        <View style={styles.overviewCard}>
          <FinanceOverviewCard />
        </View>
  
      </ScrollView>
    </LinearGradient>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 15
  },
  heading: {
    width: '100%',
    alignItems: 'center',
  },
  balanceCard: {
    marginTop: 20
  },
  overviewCard: {
    marginTop: 20
  }
})


