import emailjs from "@emailjs/browser";
import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { MagicCard } from "../magicui/magic-card";
import { BlurFade } from "../../components/magicui/blur-fade";
import { Textarea } from "../ui/textarea";
import { useEffect, useState } from "react";
import { currentTime } from "../../lib/time";

const BLUR_FADE_DELAY = 0.04;

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => setIsSuccess(false), 1500);
    }
  }, [isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    const templateParams = {
      name: name,
      email: email,
      message: message,
      time: currentTime,
    };
    emailjs
      .send(
        "service_h5hc1tw",
        "template_11j6kqo",
        templateParams,
        "GEdL6lnY7yfSHUZPp"
      )
      .then(
        () => {
          setIsSuccess(true);
          e.target.reset();
        },
        () => {
          e.target.reset();
        }
      );
  };

  return (
    <section className="relative w-full max-w-[700px] mx-auto mb-[100px] mt-[40px]">
      {isSuccess ? (
        <div className="flex w-full absolute backdrop-blur-[1px] top-0 left-0 z-10 items-center justify-center h-full">
          <div className="grid w-full absolute  mx-auto z-10  max-w-[500px]  items-start gap-4">
            <Alert className="bg-slate-400">
              <CheckCircle2Icon />
              <AlertTitle>Success! Your Send message In Here </AlertTitle>
              <AlertDescription>
                Your message has been sent successfully. Thank you for reaching
                out!
              </AlertDescription>
            </Alert>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="my-[60px]">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact Me
              </div>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let’s work together! Reach out and I’ll get back to you as soon
                as possible.
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
      <BlurFade>
        <Card className="p-0 w-full shadow-none border-none">
          <MagicCard gradientColor="#999999" className="p-0">
            <BlurFade delay={BLUR_FADE_DELAY * 1}>
              <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
                <CardTitle>Contact Me</CardTitle>
              </CardHeader>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <CardContent className="p-4">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="grid gap-4">
                    <BlurFade delay={BLUR_FADE_DELAY * 5}>
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          required
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                        />
                      </div>
                    </BlurFade>

                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          required
                          id="email"
                          name="email"
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 8}>
                      <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          required
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Type your message here."
                        />
                      </div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                      <Button className="w-full">Submit Message</Button>
                    </BlurFade>
                  </div>
                </form>
              </CardContent>
            </BlurFade>
          </MagicCard>
        </Card>
      </BlurFade>
    </section>
  );
};

export default Contact;
