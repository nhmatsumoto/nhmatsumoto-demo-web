export type User = {
    user: {
      email: string;
      name: string;
      id: number;
      enable: boolean;
      createdAt: string;
      updatedAt: string;
    };
    accessToken: string;
    refreshToken: string;
};
  
