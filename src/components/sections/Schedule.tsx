import { Card, CardContent } from "@/components/ui/card";

const Schedule = () => {
  // TODO: Replace this with your actual Google Calendar embed URL
  const googleCalendarEmbedUrl = "https://calendar.google.com/calendar/embed?src=f4c249951d788cf38ed71559c057147bcaba4fc29c12d415f44bdfd898c66ec8%40group.calendar.google.com&ctz=America%2FSao_Paulo";

  return (
    <section id="schedule" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Schedule a Consultation</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your case? Use the interactive calendar below to schedule your appointment directly.
          </p>
        </div>

        <Card className="shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={googleCalendarEmbedUrl}
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="Google Calendar for Scheduling"
              ></iframe>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              After booking, you'll receive a confirmation email. If you have any immediate questions, feel free to reach out via our contact options.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
