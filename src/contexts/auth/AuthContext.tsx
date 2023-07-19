
import React, { createContext, useEffect, useState } from 'react';

import { LogoutRequestDTO, LoginResponseDTO, UsuarioDTO, ClaimsPrincipal, RefreshRequestDTO } from './AuthClient';

export type AuthContextType = {
  user: UsuarioDTO | null,
  signin: (email: string, senha: string) => Promise<LoginResponseDTO | undefined>;
  signout: (request: LogoutRequestDTO) => void;
  validate: (token: string) => Promise<ClaimsPrincipal | undefined>;
 
};

export const AuthContext = createContext<AuthContextType>(null!);
