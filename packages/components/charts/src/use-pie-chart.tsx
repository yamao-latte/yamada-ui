import {
  type CSSUIObject,
  type CSSUIProps,
  ui,
  useTheme,
} from "@yamada-ui/core"
import { type Dict, cx } from "@yamada-ui/utils"
import { useCallback, useMemo } from "react"
import type { PieLabel, PieProps } from "recharts"
import { getComponentProps } from "./chart-utils"
import { pieChartProperties, pieProperties } from "./chart.types"
import type { PieChartUIProps, RequiredChartPropGetter } from "./chart.types"
import type { PieChartOptions } from "./pie-chart"

export type UsePieChartProps = PieChartOptions & {
  styles: Dict<CSSUIObject>
}

type LabelProps = {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  value: number
}

export const usePieChart = (arg: Omit<UsePieChartProps, "dataKey">) => {
  const { theme } = useTheme()

  const [pieChartProps, pieChartClassName] = arg.pieChartProps
    ? getComponentProps<Dict, string>(
        [arg.pieChartProps, pieChartProperties],
        arg.styles.pieChart,
      )(theme)
    : []

  const [pieProps, pieClassName] = arg.pieProps
    ? getComponentProps<Dict, string>(
        [arg.pieProps, pieProperties],
        arg.styles.pie,
      )(theme)
    : []

  const insideLabelEl: PieLabel = useCallback(
    ({ cx, cy, midAngle, innerRadius, outerRadius, value }: LabelProps) => {
      const RADIAN = Math.PI / 180
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5
      const x = cx + radius * Math.cos(-midAngle * RADIAN)
      const y = cy + radius * Math.sin(-midAngle * RADIAN)

      return (
        <ui.text
          x={x}
          y={y}
          fontSize={14}
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
          __css={{ ...arg.styles.label }}
        >
          {value}
        </ui.text>
      )
    },
    [arg.styles.label],
  )

  const getPieChartProps: RequiredChartPropGetter<
    "svg",
    Partial<PieChartUIProps>,
    Omit<PieChartUIProps, "ref" | "color">
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => {
      return {
        ref,
        className: cx(className, pieChartClassName),
        ...props,
        ...pieChartProps,
      }
    },
    [pieChartClassName, pieChartProps],
  )

  const getPieProps: RequiredChartPropGetter<
    "svg",
    Partial<PieProps>,
    Omit<PieProps, "ref" | "color">
  > = useCallback(
    ({ className, ...props } = {}, ref = null) => {
      return {
        ref,
        className: cx(className, pieClassName),
        data: arg.data,
        innerRadius: 0,
        outerRadius: "100%",
        dataKey: "value",
        label: arg.withLabels
          ? arg.labelsPosition === "inside"
            ? insideLabelEl
            : { fontSize: 14 }
          : false,
        labelLine:
          arg.withLabelsLine && arg.labelsPosition === "outside"
            ? {
                strokeWidth: 1,
              }
            : false,
        isAnimationActive: false,
        paddingAngle: 0,
        startAngle: arg.startAngle,
        endAngle: arg.endAngle,
        ...props,
        pieProps,
      }
    },
    [
      arg.data,
      arg.endAngle,
      arg.labelsPosition,
      arg.startAngle,
      arg.withLabels,
      arg.withLabelsLine,
      insideLabelEl,
      pieClassName,
      pieProps,
    ],
  )

  const cssVariables = useMemo(() => {
    const cellColors: CSSUIProps["var"] = arg.data.map((item, index) => ({
      name: `cell-${index}`,
      token: "colors",
      value: item.color ?? "transparent",
    }))

    return [...cellColors]
  }, [arg.data])

  return { getPieChartProps, getPieProps, cssVariables }
}

export type UsePieChartReturn = ReturnType<typeof usePieChart>
