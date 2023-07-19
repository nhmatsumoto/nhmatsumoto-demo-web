
import React, { createContext, useEffect, useState } from 'react';
import { redirect  } from 'react-router-dom';
import { User } from '../../types/user';
import { UsuarioDTO } from './AuthClient';

export type AuthContextType = {
  user: UsuarioDTO | null,
  signin: (email: string, password: string) => Promise<boolean>;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
