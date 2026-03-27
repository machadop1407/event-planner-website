import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createEventAction } from "@/lib/actions/events";
import Link from "next/link";

export default async function NewEventPage() {
  return (
    <div className="mx-auth w-full max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Create Event</CardTitle>
        </CardHeader>
        <CardContent>
          <Form action={createEventAction}>
            <FormField>
              <Label>Title</Label>
              <Input
                id="title"
                name="title"
                required
                placeholder="Team dinner..."
              />
            </FormField>

            <FormField>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Optional details about the event"
              />
            </FormField>

            <FormField>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                placeholder="Optional location"
              />
            </FormField>

            <FormField>
              <Label htmlFor="eventDate">Date and time</Label>
              <Input id="eventDate" name="eventDate" type="datetime-local" />
              <FormMessage>Optional, you can set this later.</FormMessage>
            </FormField>

            <div className="flex items-center gap-3">
              <Button type="submit">Create event</Button>
              <Button type="button" variant="outline" asChild>
                <Link href={"/dashboard"}>Cancel</Link>
              </Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
