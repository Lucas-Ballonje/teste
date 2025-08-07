import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import WhatsappIcon from "../icons/WhatsappIcon";

const Schedule = () => {
  // A fixed phone number for the WhatsApp link
  const whatsappNumber = "1234567890"; // Replace with your actual number
  const whatsappMessage = "Hello LexConnect, I'd like to schedule a consultation.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="schedule" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Schedule a Consultation</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your case? Select a date that works for you and contact us to finalize your appointment.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="max-w-max shadow-lg">
            <CardContent className="p-2 md:p-4">
              <Calendar
                mode="single"
                className="rounded-md border"
                classNames={{
                    caption_label: "font-headline",
                    head_cell: "font-headline",
                    cell: "font-body",
                }}
              />
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Please note: selecting a date does not confirm your appointment. <br/>Contact us to confirm availability.</p>
            <Button asChild size="lg" className="bg-green-600 text-white hover:bg-green-700">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <WhatsappIcon className="mr-3 h-6 w-6" />
                    Contact Us on WhatsApp to Book
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
