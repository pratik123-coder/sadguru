import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface CarouselArrowProps {
  direction: 'left' | 'right'
  onClick: () => void
}

export function CarouselArrow({ direction, onClick }: CarouselArrowProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      className={`absolute top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white ${
        direction === 'left' ? 'left-2' : 'right-2'
      }`}
      onClick={onClick}
      aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
    >
      {direction === 'left' ? (
        <ChevronLeft className="h-4 w-4" />
      ) : (
        <ChevronRight className="h-4 w-4" />
      )}
    </Button>
  )
}
