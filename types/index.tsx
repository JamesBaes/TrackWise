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


