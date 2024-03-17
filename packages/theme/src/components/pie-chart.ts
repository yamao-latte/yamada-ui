import type { ComponentMultiStyle } from "@yamada-ui/core"

export const PieChart: ComponentMultiStyle = {
  baseStyle: {
    container: {},
    chart: {},
    cell: {},
    tooltip: {
      display: "flex",
      flexDirection: "column",
      minW: "48",
      gap: "sm",
      rounded: "md",
      bg: ["white", "black"],
      border: "1px solid",
      borderColor: ["blackAlpha.200", "whiteAlpha.100"],
      p: "3",
      fontWeight: "medium",
      fontSize: "sm",
      color: "inherit",
      boxShadow: ["md", "dark-md"],
      maxW: "xs",
      zIndex: "dodoria",
    },
    tooltipTitle: {
      fontSize: "md",
    },
    tooltipList: {
      display: "flex",
      flexDirection: "column",
      gap: "xs",
    },
    tooltipItem: {
      display: "flex",
      alignItems: "center",
      gap: "sm",
      fontSize: "sm",
    },
    tooltipSwatch: {
      boxSize: "3",
      rounded: "full",
    },
    tooltipLabel: {
      color: ["blackAlpha.800", "whiteAlpha.700"],
    },
    tooltipValue: {
      flex: 1,
      textAlign: "end",
    },
  },

  sizes: {
    sm: {
      container: {
        w: "xl",
        h: "xs",
      },
    },
    md: {
      container: {
        w: "3xl",
        h: "sm",
      },
    },
    lg: {
      container: {
        w: "5xl",
        h: "md",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "solid",
    colorScheme: "primary",
  },
}
