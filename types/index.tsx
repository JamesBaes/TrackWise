
export interface User {
    username: string, 
    firstName: string,
    lastName: string,
    email: string, 
}

export type CategoryType = {
    category: string,
    categoryColor: string,
    budget: number,
    balance: number
}

export interface CurrentBudgetCardProps {
    budget: number,
    topCategory: string,
    topCategoryColor: string
}

export interface TransactionType {
    date: Date,
    transactionName: string,
    category: { categoryName: string, categoryColor: string},
    amount: number,
    showDate?: boolean
}

