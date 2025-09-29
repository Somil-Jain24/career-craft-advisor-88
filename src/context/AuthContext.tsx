import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface AuthUser {
  name: string;
  email: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  login: (user: AuthUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cc_user");
      if (raw) {
        const parsed = JSON.parse(raw) as AuthUser;
        if (parsed && parsed.name && parsed.email) setUser(parsed);
      }
    } catch (_err) {
      // ignore
    }
  }, []);

  const login = (nextUser: AuthUser) => {
    setUser(nextUser);
    localStorage.setItem("cc_user", JSON.stringify(nextUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("cc_user");
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};


