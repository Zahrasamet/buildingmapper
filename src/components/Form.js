import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Button from "./Button"

function Form() {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col gap-[20px[ mb-[20px[">
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email address" />
      </div>

      <div>
        <Input type="tel" placeholder="Phone number" />
        <Select>
          <SelectTrigger className="w-full rounded-none h-[54px] text-secondary outline-none">
            <SelectValue placeholder="select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a service</SelectLabel>
              <SelectItem value="construction">Construction</SelectItem>
              <SelectItem value="renovation">Renovation</SelectItem>
              <SelectItem value="restoration">Restoration</SelectItem>
              <SelectItem value="consulting">Consulting</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

<div className="flex flex-col gap-6">

      <Textarea className="h-[180px] relative resize-none rounded-none" placeholder="Enter your message..." />
      <Button text="Send message">Send message</Button>
</div>
    </form>
  )
}

export default Form
