import {ButtonHTMLAttributes, FC} from "react";
type TButtonTheme = "primary" | "clear" | "outline";
interface IAppButtonProps<T> extends ButtonHTMLAttributes<T> {
  theme?: TButtonTheme;
}
const AppButton: FC<IAppButtonProps<Element>> = ({
  children,
  theme = "primary",
  ...props
}) => {
  return (
    <button
      data-testid="button"
      {...props}
      style={{
        border:
          theme === "primary"
            ? "1px solid black"
            : theme === "clear"
            ? "none"
            : "3px solid black",
      }}
    >
      {children}
    </button>
  );
};

export default AppButton;
