import React, { createContext, useContext, useState, ReactNode } from 'react'
import { TransactionType } from '@/types'
import { useMemo } from 'react'

type BalanceType = {
  total: number
  income: number
  expenses: number
}

type TransactionContextType = {
  transactions: TransactionType[],
  balance: BalanceType
  addTransaction: (transaction: TransactionType) => void
  formatCurrency: (amount: number) => string
  budget: number
  updateBudget: (newBudget: number) => void
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined)

export const useTransactionContext = () => {
    const context = useContext(TransactionContext)
    if (!context) throw new Error("useTransactionContext must be used within a Transaction Provider");
    return context
}

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([])
  const [budget, setBudget] = useState<number>(1000)

  const addTransaction = (transaction: TransactionType) => {
    setTransactions(previousTransaction => [...previousTransaction, transaction])
  }

  const updateBudget = (newBudget: number) => {
    setBudget(newBudget)
  }

  // useMemo for calculating balance whenever a transaction is added
  const balance = useMemo(() => {
    let totalIncome = 0
    let totalExpenses = 0

    transactions.forEach(transaction => {
      const amount = Number(transaction.amount)
      if (amount > 0) {
        totalIncome += amount
      } else {
        totalExpenses += Math.abs(amount)
      }
    })

    return {
      total: totalIncome - totalExpenses,
      income: totalIncome,
      expenses: totalExpenses
    }

  }, [transactions])

  const formatCurrency = (amount: number) => {
    return '$' + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, balance, formatCurrency, budget, updateBudget }}>
      {children}
    </TransactionContext.Provider>
  )
}

