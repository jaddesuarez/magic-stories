import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const RefreshButton = () => {
  return (
    <Button className="mt-4 px-6" onClick={() => location.reload()}>
      <RefreshCw />
      Try again
    </Button>
  );
};

export default RefreshButton;
