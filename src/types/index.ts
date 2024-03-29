import { CSSProperties } from "react";

export interface HTMLHeadingElement {
    id?: string;
    className?: string;
    style?: string | CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLHeadingElement>) => void;
    onMouseOver?: (event: React.MouseEvent<HTMLHeadingElement>) => void;
    onMouseOut?: (event: React.MouseEvent<HTMLHeadingElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLHeadingElement>) => void;
    onKeyUp?: (event: React.KeyboardEvent<HTMLHeadingElement>) => void;
    tabIndex?: number;
    role?: string;
    'aria-label'?: string;
    data?: Record<string, any>;
    text: string;
  }