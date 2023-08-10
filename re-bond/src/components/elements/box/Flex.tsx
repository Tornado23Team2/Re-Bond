import React from "react"

type Props = {
  children: React.ReactNode
  direction?: "row" | "column"
  className?: string
  justify?:
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "stretch"
  align?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch"
  wrap?: "nowrap" | "wrap" | "wrap-reverse"
};

export const Flex = (props: Props) => {
  const {
    children,
    className,
    align,
    direction,
    justify,
    wrap,
  } = props

  const classes = [
    "flex",
    align && `items-${align}`,
    direction && `flex-${direction}`,
    justify && `justify-${justify}`,
    wrap && `flex-${wrap}`,
    className,
  ].filter(Boolean).join(" ")

  return (
    <div className={classes}>
      {children}
    </div>
  )
}