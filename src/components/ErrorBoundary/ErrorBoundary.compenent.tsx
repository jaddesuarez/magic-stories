import RefreshButton from "@/components/RefreshButton/RefreshButton.component";

const ErrorBoundary = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center flex-col gap-5">
      <h1 className="text-red-500 title-large">Error</h1>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-black title-large">
          Whoops! Something went wrong...
        </h1>

        <p className="body-large">
          An unexpected error occurred. Please try again.
        </p>
        <RefreshButton />
      </div>
    </div>
  );
};

export default ErrorBoundary;
