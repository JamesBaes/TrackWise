import React, { createContext, useContext, useState, ReactNode } from 'react'
import { TransactionType } from '@/types'

type TransactionContextType = {
    transactions: TransactionType[]
    addTransaction: (transaction: TransactionType) => void
}

const TransactionContext = createContext<TransactionContextType | undefined>(undefined)

export const useTransactionContext = () => {
    const context = useContext(TransactionContext)
    if (!context) throw new Error("useTransactionContext must be used within a Transaction Provider");
    return context
}

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([])

  const addTransaction = (transaction: TransactionType) => {
    setTransactions(previousTransaction => [...previousTransaction, transaction])
  }

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

