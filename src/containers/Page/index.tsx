import { PageContainer } from "./styles";

export const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};
