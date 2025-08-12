import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/config/firebase";
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  User 
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore"
import { db } from "@/config/firebase";

type AuthContextType = {
    user: User | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (fullName: string, email: string, password: string) => Promise<void>;
    signOutUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
}

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const signIn = async (email: string, password: string) => {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password);
        setLoading(false);
    };

    const signUp = async (fullName: string, email: string, password: string) => {
        setLoading(true);
        const userAccount = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", userAccount.user.uid), {
            fullName: fullName,
            email: userAccount.user.email,
            createdAt: new Date(),
        })
        setLoading(false);
    };

    const signOutUser = async () => {
        setLoading(true);
        await signOut(auth);
        setLoading(false);
    }

    return (
        <AuthContext.Provider value={{ user, loading, signIn, signUp, signOutUser }}>
            {children}
        </AuthContext.Provider>
    )
    
}