import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface IAppButtonProps<T> extends ButtonHTMLAttributes<T> {
  label: string;
}
const AppButton: FC<IAppButtonProps<Element>> = ({ children }) => {
  return <button>{children}</button>;
};

export default AppButton;
