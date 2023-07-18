
import React, { createContext, useEffect, useState } from 'react';
import { redirect  } from 'react-router-dom';
import { User } from '../../types/user';

export type AuthContextType = {
  user: User | null,
  signin: (email: string, password: string) => Promise<boolean>;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
