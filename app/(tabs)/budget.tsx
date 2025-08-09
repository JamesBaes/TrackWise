import CategoryCard from '@/components/budget-page-components/category-card'
import CurrentBudgetCard from '@/components/budget-page-components/current-budget-card'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native'


const categoryData = [
  {
    category: 'Food and Drinks',
    categoryColor: '#FFAE00',
    budget: 1000,
    balance: 500
  },
  {
    category: 'Transport',
    categoryColor: '#b11b1bff',
    budget: 800,
    balance: 200
  },
  {
    category: 'Shopping',
    categoryColor: '#971391ff',
    budget: 1200,
    balance: 900
  }
]

const BudgetPage = () => {
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
        <View>
          <CurrentBudgetCard 
          budget={1000}
          topCategory='Food and Drinks'
          topCategoryColor='#FFAE00'
        />  
        </View>
        
        <View style={{marginTop: 20, gap: 20}}>
          {categoryData.map((item, idx) => (
            <CategoryCard 
              key={idx}
              category={item.category}
              categoryColor={item.categoryColor}
              budget={item.budget}
              balance={item.balance}
            />
          ))}
        </View>

      </ScrollView>

    </LinearGradient>
  )
}

export default BudgetPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 15
  }
})