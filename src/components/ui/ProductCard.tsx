import { cn } from "@utils/cn";

type ProductCardProps = {
	image: string;
	title: string;
	price: number;
	className?: string;
	isLazyLoading?: boolean;
};

const ProductCard = ({ image, title, price, isLazyLoading = true, className }: ProductCardProps) => {
	return (
		<div
			className={cn(
				"space-between flex h-[320px] w-[190px] flex-col justify-between rounded-lg border border-gray-200",
				className,
			)}
		>
			<section className="h-[190px] w-full rounded-t-lg">
				<img
					src={image}
					alt={title}
					loading={isLazyLoading ? "lazy" : "eager"}
					className="h-[190px] w-full rounded-t-lg object-cover"
				/>
			</section>
			<section className="flex h-full flex-col justify-between px-4 py-4">
				<h3 className="line-clamp-2 h-[50px] overflow-hidden text-ellipsis">{title}</h3>
				<p className="font-bold text-[18px]">${price}</p>
			</section>
		</div>
	);
};

export default ProductCard;
