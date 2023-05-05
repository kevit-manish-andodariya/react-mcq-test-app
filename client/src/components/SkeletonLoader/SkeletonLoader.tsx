import { Skeleton, SxProps } from "@mui/material";

interface MyComponentProps {
  iteration?: number;
  width?: number;
  height: number;
  variant?: "rounded" | "text" | "rectangular" | "circular";
  className?: string;
  sx?: SxProps;
}

const SkeletonLoader = (props: MyComponentProps) => {
  const {
    iteration = 1,
    width,
    height,
    variant = "rounded",
    className,
    sx,
  } = props;
  const iterationCount: number[] = Array.from(
    { length: iteration },
    (_, index: number) => index
  );

  if (iteration) {
    return (
      <>
        {iterationCount.map(() => {
          return (
            <Skeleton
              animation="wave"
              width={width}
              height={height}
              variant={variant}
              className={className}
              sx={sx}
            />
          );
        })}
      </>
    );
  }
  return (
    <Skeleton
      animation="wave"
      width={width}
      height={height}
      variant={variant}
      className={className}
      sx={sx}
    />
  );
};

export default SkeletonLoader;