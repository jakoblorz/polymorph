import React from "react";
export type PolyProps<P extends {
    as: never;
}> = React.PropsWithChildren<{
    as: React.FunctionComponent<P>;
} & P>;
export declare function Poly<P extends {
    as: never;
}>({ as, children, ...props }: PolyProps<P>): React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
//# sourceMappingURL=poly.d.ts.map