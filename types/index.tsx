
export interface User {
    username: string, 
    firstName: string,
    lastName: string,
    email: string, 
}

export const CATEGORY_COLORS: Record<string, string> = {
  'Food and Drinks': '#FFAE00',
  'Transport': '#b11b1bff',
  'Shopping': '#971391ff',
}


export type CategoryType = {
    category: string,
    categoryColor: string,
    budget: number,
    balance: number,
    onAddTransaction?: () => void
}

export interface CurrentBudgetCardProps {
    budget: number,
    topCategory: string,
    topCategoryColor: string
}

export interface TransactionType {
    date: Date,
    transactionName: string,
    category: { category: string, categoryColor: string},
    amount: number,
}


