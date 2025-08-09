import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { typography } from '@/theme/typography'
import { dropShadow } from '@/theme/drop-shadow'
import { CurrentBudgetCardProps } from '@/types'

const CurrentBudgetCard = ({ budget, topCategory, topCategoryColor}: CurrentBudgetCardProps) => {
  return (
    <View style={[styles.container, dropShadow.shadow]}>
        <View>
            <Text style={[typography.heading, {fontSize: 28, color: 'black'}]}>
                Current Budget
            </Text>
            <Text style={[typography.body, {fontSize: 26, color: 'black', fontWeight: 500, textAlign: 'center'}]}>
                ${budget}
            </Text>
        </View>
        <View>
            <Text style={[typography.heading, {fontSize: 24, color: 'black', textAlign: 'center'}]}>
                Top Category
            </Text>
            <Text style={[typography.body, {fontSize: 24, color: topCategoryColor, fontWeight: 500,}]}>
                {topCategory}
            </Text>
        </View>
    </View>
  )
}

export default CurrentBudgetCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 224,
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderBottomWidth: 10,
        alignItems: 'center'
    },

})