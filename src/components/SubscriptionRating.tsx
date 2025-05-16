import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import React, { useState } from "react";

type RatingLevel = 1 | 2 | 3 | 4 | 5;

const SubscriptionRating: React.FC = () => {
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState<RatingLevel | null>(null);
  const [feedback, setFeedback] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive",
      });
      return;
    }

    // This would normally be connected to a backend API
    console.log("Subscription data:", { email, rating, feedback });

    toast({
      title: "Thank You!",
      description: "Your subscription and feedback have been received.",
    });

    setIsSubscribed(true);
  };

  const handleRatingSelect = (value: RatingLevel) => {
    setRating(value);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Rate My Services</CardTitle>
        <CardDescription>
          Subscribe to get updates and share your feedback about my portfolio
          and services.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isSubscribed ? (
          <form onSubmit={handleSubscribe}>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Rate my services (Optional)
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Button
                      key={value}
                      type="button"
                      variant={rating === value ? "default" : "outline"}
                      className="w-10 h-10 p-0"
                      onClick={() => handleRatingSelect(value as RatingLevel)}
                    >
                      {value}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">
                  Feedback (Optional)
                </label>
                <Textarea
                  placeholder="Share your thoughts on my portfolio and services..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={4}
                />
              </div>
            </div>

            <Button type="submit" className="w-full mt-6">
              Subscribe & Submit
            </Button>
          </form>
        ) : (
          <div className="text-center py-4">
            <h3 className="text-lg font-medium mb-2">
              Subscription Successful!
            </h3>
            <p className="text-muted-foreground">
              Thank you for subscribing. You'll receive updates and news from
              me.
            </p>
            <Button
              className="mt-4"
              variant="outline"
              onClick={() => {
                setIsSubscribed(false);
                setEmail("");
                setRating(null);
                setFeedback("");
              }}
            >
              Subscribe Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SubscriptionRating;
