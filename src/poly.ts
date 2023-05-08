import React from "react";

export type PolyProps<P extends { as: never }> = React.PropsWithChildren<
  {
    as: React.FunctionComponent<P>;
  } & P
>;

export function Poly<P extends { as: never }>({
  as,
  children,
  ...props
}: PolyProps<P>) {
  return React.createElement(as, props, children);
}
