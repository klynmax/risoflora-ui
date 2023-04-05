import React from "react";
import "./style.css";

type Variant = "circular" | "square" | "rounded";
type Size = "xs" | "sm" | "md" | "xl";

export type AvatarProps = {
  style?: React.CSSProperties;
  variant?: Variant;
  size?: Size;
  src?: string;
  alt?: string;
  notify?: boolean;
  value?: number;
  border?: boolean;
};

// Criar a borda do avatar!

export const Avatar = ({
  style,
  variant,
  size,
  src,
  alt,
  notify,
  value,
  border,
}: AvatarProps) => {
  return (
    <div className="flex flex-row">
      {notify === true && variant === "circular" && (
        <div
          className={
            size === "xs"
              ? ""
              : size === "sm"
              ? `notify-badge-sm`
              : size === "md"
              ? `notify-badge-md`
              : "notify-badge"
          }
        >
          {size === "xs"
            ? ""
            : value !== undefined && value > 99
            ? "99+"
            : value}
        </div>
      )}
      {notify === true && variant === "square" && (
        <div
          className={
            size === "xs"
              ? ""
              : size === "sm"
              ? `notify-badge-square-sm`
              : size === "md"
              ? `notify-badge-square-md`
              : size === "xl"
              ? `notify-badge-square-xl`
              : "notify-badge"
          }
        >
          {size === "xs"
            ? ""
            : value !== undefined && value > 99
            ? "99+"
            : value}
        </div>
      )}
      {notify === true && variant === "rounded" && (
        <div
          className={
            size === "xs"
              ? ""
              : size === "sm"
              ? `notify-badge-square-sm`
              : size === "md"
              ? `notify-badge-square-md`
              : size === "xl"
              ? `notify-badge-square-xl`
              : "notify-badge"
          }
        >
          {size === "xs"
            ? ""
            : value !== undefined && value > 99
            ? "99+"
            : value}
        </div>
      )}
      {variant === "circular" ? (
        <div className={border === true ? "border-circular" : ""} style={style}>
          <img
            style={style}
            className={
              size === size ? `image-circular ${size}` : `image-circular `
            }
            src={src}
            alt={alt}
          />
        </div>
      ) : variant === "square" ? (
        <div className={border === true ? "border-square" : ""} style={style}>
          <img
            style={style}
            className={
              size === size
                ? `image-square ${size}`
                : border === true
                ? `image-square border`
                : `image-square`
            }
            src={src}
            alt={alt}
          />
        </div>
      ) : variant === "rounded" ? (
        <div className={border === true ? "border-rounded" : ""} style={style}>
          <img
            style={style}
            className={
              size === size
                ? `image-rounded ${size}`
                : border === true
                ? `image-rounded border`
                : `image-rounded`
            }
            src={src}
            alt={alt}
          />
        </div>
      ) : (
        <img
          style={style}
          className={
            border === true ? `image-circular border` : `image-circular`
          }
          src={src}
          alt={alt}
        />
      )}
    </div>
  );
};
