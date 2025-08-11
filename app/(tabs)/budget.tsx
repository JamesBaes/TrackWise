import InputContainer from '@/components/add-transaction-components/inputContainer'
import CategoryCard from '@/components/budget-page-components/category-card'
import CurrentBudgetCard from '@/components/budget-page-components/current-budget-card'
import { CategoryType, TransactionType } from '@/types'
import AntDesign from '@expo/vector-icons/AntDesign'
import { LinearGradient } from 'expo-linear-gradient'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import * as yup from 'yup'
import { typography } from '@/theme/typography'


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

const AddTransactionFormSchema = yup.object().shape({
    transactionName: yup.string().required("Transaction name is required"),
    amount: yup.number().typeError("Amount must be a number").required("Amount is required"),
    date: yup.date().required("Date is required")
})

const BudgetPage = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null)


  const handleAddTransaction = (category: CategoryType) => {
    setSelectedCategory(category)
    setModalVisible(true)
  }

  const handleAddTransactionSubmit = (transaction: TransactionType) => {

  }

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
              onAddTransaction={() => handleAddTransaction(item)}
            />
          ))}
        </View>


          { /* The overlay for adding a transaction */}
        <Modal
          visible={modalVisible}
          transparent
          animationType="fade"
        >
          <View style={styles.overlayContainer}>
            <View style={styles.overlay}>
              <Pressable style={styles.backButton} onPress={() => setModalVisible(false)}>
                <AntDesign name="back" size={24} color="black" />
              </Pressable>
              <Text style={styles.overlayTitle}>
                Add Transaction
              </Text>

              <Formik
                initialValues={{ 
                  transactionName: "", 
                  amount: 0, 
                  date: new Date(),
                  category: selectedCategory ? { 
                    category: selectedCategory.category, 
                    categoryColor: selectedCategory.categoryColor 
                  } : { category: "", categoryColor: "" }
                }}
                validationSchema={AddTransactionFormSchema}
                onSubmit={(values) => {
                  const transaction = {
                    transactionName: values.transactionName,
                    amount: Number(values.amount),
                    date: values.date,
                    category: {
                      category: selectedCategory?.category ?? '',
                      categoryColor: selectedCategory?.categoryColor ?? '#000'
                    }
                  };
                  handleAddTransactionSubmit(transaction);
                  setModalVisible(false)
                }}
              >   
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors, 
                  touched,
                }) => (
                  <View style={styles.form}>
                    <View style={styles.inputGroup}>
                      <Text style={styles.label}>Transaction Name</Text>
                      <InputContainer 
                        placeholder="e.g. Starbucks"
                        onChangeText={handleChange('transactionName')}
                        onBlur={handleBlur('transactionName')}
                        value={values.transactionName}
                      />
                      {touched.transactionName && errors.transactionName && (
                        <Text style={styles.errorText}>{errors.transactionName}</Text>
                      )}
                    </View>

                    <View style={styles.inputGroup}>
                      <Text style={styles.label}>Amount</Text>
                      <InputContainer 
                        placeholder="e.g. 12.50"
                        onChangeText={handleChange('amount')}
                        onBlur={handleBlur('amount')}
                        value={values.amount ? values.amount.toString() : ""}
                      />
                      {touched.amount && errors.amount && (
                        <Text style={styles.errorText}>{errors.amount}</Text>
                      )}
                    </View>

                    <View style={styles.inputGroup}>
                      <Text style={styles.label}>Date</Text>
                      <InputContainer 
                        placeholder="e.g. 2025-07-08"
                        onChangeText={handleChange('date')}
                        onBlur={handleBlur('date')}
                        value={values.date instanceof Date ? values.date.toDateString() : values.date}
                      />
                      {touched.date && errors.date && (
                        <Text style={styles.errorText}>{String(errors.date)}</Text>
                      )}
                    </View>

                    <View style={styles.inputGroup}>
                      <Text style={[typography.body,styles.label]}>Category</Text>
                      <View style={styles.categoryDisplay}>
                        <View style={[styles.categoryDot, { backgroundColor: selectedCategory?.categoryColor ?? '#ccc' }]} />
                        <Text style={styles.categoryText}>{selectedCategory?.category ?? 'None selected'}</Text>
                      </View>
                    </View>

                    <Pressable style={styles.overlaySubmitButton} onPress={() => handleSubmit()}>
                      <Text style={styles.submitText}>Add</Text>
                    </Pressable>
                  </View>
                )}
              </Formik>
            </View>
          </View>
        </Modal>

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
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: "center",
    alignItems: "center"
  },
  overlay: {
    width: "90%",
    height: "65%",
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderBottomWidth: 10,
    padding: 15,
  }, 
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  overlayTitle: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',

  },
  form: {
    flex: 1,
    justifyContent: 'center',
    gap: 18,
  },
  inputGroup: {
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#222',
    marginBottom: 4,
    fontWeight: '500',
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: 2,
    textAlign: 'right',
  },
  categoryDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  categoryDot: {
    width: 18,
    height: 18,
    borderRadius: 18,
  },
  categoryText: {
    fontSize: 16,
    color: '#444',
  },
  overlaySubmitButton: {
    marginTop: 18,
    width: "100%",
    height: 44,
    backgroundColor: "#6088C4",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  submitText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  
})