import { Category } from "@/payload-types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryDropdownProps {
  category: Category;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

export const CategoryDropdown = ({
  category,
  isActive,
  isNavigationHovered,
}: CategoryDropdownProps) => {
  return (
    <Button 
        variant="outline"
        className={cn(
            "h-11 bg-transparent border-transparent rounded-full hover:border-transparent text-black",
            isActive && !isNavigationHovered && "bg-white border-primary"
        )}
    >
        {category.name}
    </Button>
  );
};
