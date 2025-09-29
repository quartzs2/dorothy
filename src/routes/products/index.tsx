import { getAllProducts } from "@api";
import { ProductCard } from "@components/ui";
import { PRODUCTS_QUERY_KEY } from "@constants/queryKeys";
import { URLS } from "@constants/urls";
import { ErrorBoundary, Suspense } from "@suspensive/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(URLS.PRODUCTS)({
	component: ProductsListRoute,
});

function ProductsListRoute() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ErrorBoundary fallback={<div>Error</div>}>
				<ProductsListPage />
			</ErrorBoundary>
		</Suspense>
	);
}

function ProductsListPage() {
	const { data } = useSuspenseQuery({
		queryKey: PRODUCTS_QUERY_KEY,
		queryFn: () => getAllProducts(),
	});

	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
			{data?.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	);
}
