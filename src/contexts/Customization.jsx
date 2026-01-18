import { createContext, useState } from "react";

export const CustomizationContext = createContext({});

export const SHOE_CUSTOMIZATION = {
  midsole: {
    label: "Midsole",
    meshNames: ["Midsole"],
    colors: [
      { color: "#ffffff", name: "White" },
      { color: "#1f1f1f", name: "Black" },
      { color: "#d9d9d9", name: "Light Grey" },
      { color: "#f5e6c8", name: "Cream" },
    ],
  },

  heelTab: {
    label: "Heel Tab",
    meshNames: ["HeelTab"],
    colors: [
      { color: "#000000", name: "Black" },
      { color: "#ad0000", name: "Red" },
      { color: "#006dad", name: "Blue" },
      { color: "#ffffff", name: "White" },
    ],
  },

  quarterOverlay: {
    label: "Quarter Overlay",
    meshNames: ["QuarterOverlay"],
    colors: [
      { color: "#2b2b2b", name: "Dark Grey" },
      { color: "#ffffff", name: "White" },
      { color: "#6b7280", name: "Cool Grey" },
      { color: "#111827", name: "Jet Black" },
    ],
  },

  laces: {
    label: "Laces",
    meshNames: ["Laces"],
    colors: [
      { color: "#ffffff", name: "White" },
      { color: "#000000", name: "Black" },
      { color: "#eab308", name: "Yellow" },
      { color: "#dc2626", name: "Red" },
    ],
  },

  sidePanels: {
    label: "Side Panels",
    meshNames: ["SidePanel"],
    colors: [
      { color: "#1e293b", name: "Black" },
      { color: "#064e3b", name: "Dark Green" },
      { color: "#d6d3d1", name: "Gray" },
      { color: "#1e3a8a", name: "Blue" },
      { color: "#881337", name: "Red" },
    ],
  },

  // tongue: {
  //   label: "Tongue",
  //   meshNames: ["Tongue"],
  //   colors: [
  //     { color: "#ffffff", name: "White" },
  //     { color: "#000000", name: "Black" },
  //     { color: "#9ca3af", name: "Grey" },
  //     { color: "#3b82f6", name: "Blue" },
  //   ],
  // },

  // innerLining: {
  //   label: "Inner Lining",
  //   meshNames: ["InnerLining"],
  //   colors: [
  //     { color: "#000000", name: "Black" },
  //     { color: "#ffffff", name: "White" },
  //     { color: "#374151", name: "Dark Grey" },
  //     { color: "#16a34a", name: "Green" },
  //   ],
  // },

  // eyelets: {
  //   label: "Eyelets",
  //   meshNames: ["Eyelets"],
  //   colors: [
  //     { color: "#000000", name: "Black" },
  //     { color: "#9ca3af", name: "Silver" },
  //     { color: "#ca8a04", name: "Gold" },
  //     { color: "#ffffff", name: "White" },
  //   ],
  // },
};

export function CustomizationProvider({ children }) {
  const [colors, setColors] = useState(() => {
    return Object.keys(SHOE_CUSTOMIZATION).reduce((acc, key) => {
      acc[key] = SHOE_CUSTOMIZATION[key].colors[0].color;
      return acc;
    }, {});
  });

  const setColor = (part, color) => {
    setColors((prev) => ({
      ...prev,
      [part]: color,
    }));
  };
  return (
    <CustomizationContext value={{ colors, setColor }}>
      {children}
    </CustomizationContext>
  );
}
