type ErrorFallbackProps = {
	reset?: () => void;
	error?: Error;
};

const ErrorFallback = ({ reset, error }: ErrorFallbackProps) => {
	return (
		<div className="flex h-full flex-col items-center justify-center px-4 py-80">
			<div className="flex max-w-md flex-col items-center space-y-4 rounded-lg border border-red-200 bg-red-50 p-8 text-center">
				<div className="text-5xl text-red-500">⚠️</div>
				<h2 className="font-bold text-red-900 text-xl">오류가 발생했습니다</h2>
				<p className="text-red-700 text-sm">{error?.message || "문제가 발생했습니다."}</p>
				{reset && (
					<button
						type="button"
						onClick={reset}
						className="rounded-lg bg-red-600 px-6 py-2 font-medium text-white transition-colors hover:bg-red-700"
					>
						다시 시도
					</button>
				)}
			</div>
		</div>
	);
};

export default ErrorFallback;
