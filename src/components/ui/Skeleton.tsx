import { cn } from "@utils/cn";

type SkeletonProps = {
	className?: string;
	animation?: string;
	isAnimate?: boolean;
};

const Skeleton = ({ animation = "animate-pulse", className, isAnimate = true }: SkeletonProps) => {
	return <div className={cn("rounded-xl bg-gray-200", isAnimate ? animation : "", className)} />;
};

export default Skeleton;
