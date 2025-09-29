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
		<div className={cn("space-between flex h-[320px] w-[240px] flex-col rounded-lg border border-gray-200", className)}>
			<img
				src={image}
				alt={title}
				loading={isLazyLoading ? "lazy" : "eager"}
				className="h-[240px] w-full rounded-t-lg object-cover"
			/>
			<section className="flex h-full flex-col gap-1 px-4 py-2">
				<h3>{title}</h3>
				<p className="font-bold text-[18px]">${price}</p>
			</section>
		</div>
	);
};

export default ProductCard;
