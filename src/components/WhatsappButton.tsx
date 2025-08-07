import Link from 'next/link';
import { Button } from './ui/button';
import WhatsappIcon from './icons/WhatsappIcon';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


const WhatsappButton = () => {
    const whatsappNumber = "1234567890"; // Replace with your actual number
    const whatsappMessage = "Hello LexConnect, I have a question.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button asChild size="icon" className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-green-600 hover:bg-green-700 z-50">
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
              <WhatsappIcon className="h-7 w-7 text-white" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-primary text-primary-foreground">
          <p>Chat with us!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsappButton;
