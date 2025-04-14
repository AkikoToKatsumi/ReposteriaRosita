import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Definir el tipo de usuario completo
interface User {
    name: any;
    id: string;
    email: string;
    role: string;
}

// Tipo del contexto
interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (userData: User) => void;
    logout: () => void;
}

// Crear contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Proveedor
export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        let user = null;
        
        if (storedUser) {
            try {
                user = JSON.parse(storedUser);
            } catch (error) {
                console.error("Error al analizar JSON:", error);
            }
        }
        
        if (user) {
            setUser(user);
            setIsAuthenticated(true);
        }
    }, []);

    const login = (userData: User) => {
        setUser(userData); // Ensure userData includes the name field
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para acceder al contexto
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de un AuthProvider');
    }
    return context;
};
