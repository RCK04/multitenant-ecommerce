import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Sellix helps creators and businesses build, manage, and scale their online stores.",
};

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant="elevated">I am a button</Button>
        </div>

        <div>
          <Input placeholder="I am an input" />
        </div>

        <div>
          <Progress value={50} />
        </div>

        <div>
          <Textarea value="I am a textarea" />
        </div>

        <div>
          <Checkbox />
        </div>
      </div>
    </div>
  );
}
