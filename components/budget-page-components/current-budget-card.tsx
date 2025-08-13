import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { typography } from '@/theme/typography'
import { dropShadow } from '@/theme/drop-shadow'
import { useTransactionContext } from '@/context/TransactionContext'
import { Ionicons } from '@expo/vector-icons';

interface CurrentBudgetCardProps {
    topCategory: string;
    topCategoryColor: string;
}

const CurrentBudgetCard = ({topCategory, topCategoryColor}: CurrentBudgetCardProps) => {
    const { balance, formatCurrency, budget, updateBudget } = useTransactionContext();
    const [budgetInput, setBudgetInput] = useState(budget.toString());
		const [isEditing, setIsEditing] = useState(false);

    const handleSaveBudget = () => {
        const newBudget = Number(budgetInput);
        if (!isNaN(newBudget) && newBudget > 0) {
            updateBudget(newBudget);
        } else {
            setBudgetInput(budget.toString()); // defaults to current budget input if invalid
        }
				setIsEditing(false)
    }

    // check if budget > 0 then calculates percentage
    const percentSpent = budget > 0 ? Math.min(100, Math.round((balance.expenses / budget) * 100)) : 0;
    const remaining = budget - balance.expenses;

  return (
    <View style={[styles.container, dropShadow.shadow]}>
      <View style={styles.header}>
        <Text style={[typography.heading, styles.title]}>Current Budget</Text>
        
        {isEditing ? (
          <View style={styles.editContainer}>
            <TextInput
              style={[typography.body, styles.budgetInput, {fontWeight: '500'}]}
              value={budgetInput}
              onChangeText={setBudgetInput}
              keyboardType="numeric"
              autoFocus
            />
            <Pressable onPress={handleSaveBudget} style={styles.saveButton}>
              <Text style={[typography.body, styles.saveButtonText]}>Save</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.budgetRow}>
            <Text style={[typography.heading, styles.budgetAmount]}>
              {formatCurrency(budget)}
            </Text>
            <Pressable onPress={() => setIsEditing(true)} style={styles.editButton}>
              <Ionicons name="pencil" size={18} color="#6088C4" />
            </Pressable>
          </View>
        )}
      </View>
      
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={[typography.body, styles.infoLabel]}>Remaining</Text>
          <Text style={[styles.infoValue, {color: remaining >= 0 ? '#2C6F00' : '#B40000'}]}> {/* the remaining balance is green if positive and 0 and red if negative */}
            {formatCurrency(remaining)}
          </Text>
        </View>
        
        <View style={styles.infoItem}>
          <Text style={[typography.body, styles.infoLabel]}>Spent</Text>
          <Text style={[typography.body, styles.infoValue]}>
            {formatCurrency(balance.expenses)} ({percentSpent}%)
          </Text>
        </View>
      </View>
      
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, {width: `${percentSpent}%`}]} />
      </View>
      
      <View style={styles.topCategory}>
        <Text style={[typography.body, styles.topCategoryLabel]}>Top Category</Text>
        <View style={styles.categoryDetail}>
          <View style={[styles.categoryDot, {backgroundColor: topCategoryColor}]} />
          <Text style={[typography.body ,styles.categoryName]}>{topCategory}</Text>
        </View>
      </View>
    </View>
  );
};


export default CurrentBudgetCard

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderBottomWidth: 10,
    padding: 18,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    color: 'black',
  },
  budgetRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  budgetAmount: {
    fontSize: 20,
    color: '#6088C4',
  },
  editButton: {
    marginLeft: 8,
    padding: 4,
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  budgetInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 4,
    width: 100,
    fontSize: 18,
    color: '#6088C4',
  },
  saveButton: {
    marginLeft: 8,
    backgroundColor: '#6088C4',
    borderRadius: 4,
    padding: 4,
    paddingHorizontal: 8,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 14,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoItem: {},
  infoLabel: {
    fontSize: 18,
    color: 'black',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },
  progressContainer: {
    height: 10,
    backgroundColor: '#EEE',
    borderRadius: 5,
    marginBottom: 16,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#6088C4',
    borderRadius: 5,
  },
  topCategory: {
    color: 'black',
    marginTop: 8,
  },
  topCategoryLabel: {
    fontWeight: '500',   
    fontSize: 18,
    color: 'black',
    marginBottom: 4,
  },
  categoryDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 8,
  },
  categoryName: {
    fontWeight: '500',
    fontSize: 16,
  },
})