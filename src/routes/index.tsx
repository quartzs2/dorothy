import ProductCard from "@components/ui/ProductCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div>
			<h1>Hello World</h1>
			<div className="flex flex-wrap items-center justify-center gap-4">
				<ProductCard image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" name="Product 1" price={100} />
			</div>
		</div>
	);
}
