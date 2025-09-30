import { getAllProducts } from "@api";
import { ProductCard, ProductListSkeleton } from "@components/ui";
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
		<Suspense fallback={<ProductListSkeleton />}>
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
		<div className="flex h-full flex-col items-center">
			<h1 className="sr-only">전체 상품</h1>
			<ul className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3">
				{data?.map((product) => (
					<li key={product.id}>
						<ProductCard {...product} />
					</li>
				))}
			</ul>
		</div>
	);
}
