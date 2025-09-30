import Skeleton from "./Skeleton";

type ProductListSkeletonProps = {
	count?: number;
};

const ProductListSkeleton = ({ count = 9 }: ProductListSkeletonProps) => {
	const skeletonKeys = Array.from({ length: count }, (_, i) => `skeleton-${i}-${Date.now()}`);

	return (
		<div className="flex h-full flex-col items-center">
			<ul className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3">
				{skeletonKeys.map((key) => (
					<li key={key} className="h-[320px] w-[190px] rounded-lg border border-gray-200">
						<Skeleton className="h-[190px] w-full rounded-t-lg" />
						<div className="space-y-2 px-4 py-4">
							<Skeleton className="h-[50px] w-full" />
							<Skeleton className="h-[24px] w-20" />
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProductListSkeleton;
