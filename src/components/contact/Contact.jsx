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
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const phone = e.target[1].value;
    const email = e.target[2].value;
    const message = e.target[3].value;

    const templateParams = {
      name: name,
      phone: phone,
      email: email,
      message: message,
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
    <section className="relative my-[100px]">
      {isSuccess && (
        <div className="flex w-full absolute backdrop-blur-lg backdrop:blur-md items-center justify-center h-full">
          <div className="grid w-full absolute  mx-auto z-10  max-w-[400px]  items-start gap-4">
            <Alert>
              <CheckCircle2Icon />
              <AlertTitle>Success! Your changes have been saved</AlertTitle>
              <AlertDescription>
                This is an alert with icon, title and description.
              </AlertDescription>
            </Alert>
          </div>
        </div>
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
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                        />
                      </div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 6}>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="text"
                          placeholder="+998 (99) 999 99 99"
                        />
                      </div>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
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
