import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { typography } from '@/theme/typography'
import { dropShadow } from '@/theme/drop-shadow'
import ProgressBar from './progress-bar'



const FinanceOverviewCard = () => {
  return (
    <View style={[dropShadow.shadow, styles.container]}>
        <Text style={[typography.heading, {fontSize: 26, color: 'black', marginBottom: 4}]}>
            July
        </Text>
        <Text style={[typography.body, {fontSize: 22, color: 'black'}]}>
            $432 Remaining
        </Text>
        <View>
            <ProgressBar progress={0.8}/>
        </View>
    </View>
  )
}

export default FinanceOverviewCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 822,
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderBottomWidth: 10,
        gap: 8,
    }
})