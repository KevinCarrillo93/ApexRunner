import { useContext } from "react";
import { CustomizationContext } from "../contexts/Customization";

export function useCustomization() {
  const context = useContext(CustomizationContext);
  if (!context) {
    throw new Error(
      "useCustomization must be used within CustomizationProvider"
    );
  }
  return context;
}
