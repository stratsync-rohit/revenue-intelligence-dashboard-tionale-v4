import { createContext, useContext } from "react";

export type Client = {
  name: string;
  industry: string;
};

const ClientContext = createContext<Client | null>(null);

export const ClientProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: Client;
}) => {
  return (
    <ClientContext.Provider value={value}>
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = () => {
  const ctx = useContext(ClientContext);
  if (!ctx) {
    throw new Error("useClient must be used inside ClientProvider");
  }
  return ctx;
};
