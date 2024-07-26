import * as React from "react";

interface BadgeProps {
  variant?: "default" | "destructive" | "success" | "warning";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Badge({ variant = "default", children, onClick, className = "" }: BadgeProps) {
  const baseStyle = "inline-block px-2 py-1 text-xs font-semibold rounded-full cursor-pointer";
  const variantStyles = {
    default: "bg-gray-200 text-gray-800",
    destructive: "bg-red-200 text-red-800",
    success: "bg-green-200 text-green-800",
    warning: "bg-yellow-200 text-yellow-800",
  };

  return (
    <span onClick={onClick} className={`${baseStyle} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
