
export interface User {
    username: string, 
    firstName: string,
    lastName: string,
    email: string, 
}

export type Category = {
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

export interface Transaction {
    date: Date,
    transactionName: string,
    category: Pick<Category, 'category'>,
    amount: number,
}

