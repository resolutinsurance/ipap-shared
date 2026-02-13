"use client";

import { useState } from "react";

// --- Primitives ---
import { Button } from "@shared/components/ui/button";
import { Checkbox } from "@shared/components/ui/checkbox";
import { Input } from "@shared/components/ui/input";
import { Label } from "@shared/components/ui/label";
import { PasswordInput } from "@shared/components/ui/password-input";
import { RadioGroup, RadioGroupItem } from "@shared/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shared/components/ui/select";
import { Switch } from "@shared/components/ui/switch";
import { Textarea } from "@shared/components/ui/textarea";

// --- Display ---
import { Avatar, AvatarFallback, AvatarImage } from "@shared/components/ui/avatar";
import { Badge } from "@shared/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@shared/components/ui/card";
import { Separator } from "@shared/components/ui/separator";
import { Skeleton } from "@shared/components/ui/skeleton";

// --- Feedback / Overlay ---
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@shared/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shared/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@shared/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@shared/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@shared/components/ui/tooltip";

// --- Navigation ---
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@shared/components/ui/pagination";

// --- Custom ---
import { ConfirmModal } from "@shared/components/ui/confirm-modal";
import { OTPInput } from "@shared/components/ui/otp-input";
import SearchBox from "@shared/components/ui/search-box";
import { Stepper } from "@shared/components/ui/stepper";
import WidthConstraint from "@shared/components/ui/width-constraint";

// ---------------------------------------------------------------------------

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-xl font-semibold tracking-tight mb-4 border-b pb-2">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

const NAV_ITEMS = [
  { id: "button", label: "Button" },
  { id: "badge", label: "Badge" },
  { id: "input", label: "Input" },
  { id: "textarea", label: "Textarea" },
  { id: "password-input", label: "PasswordInput" },
  { id: "label", label: "Label" },
  { id: "checkbox", label: "Checkbox" },
  { id: "switch", label: "Switch" },
  { id: "radio-group", label: "RadioGroup" },
  { id: "select", label: "Select" },
  { id: "avatar", label: "Avatar" },
  { id: "skeleton", label: "Skeleton" },
  { id: "separator", label: "Separator" },
  { id: "card", label: "Card" },
  { id: "accordion", label: "Accordion" },
  { id: "tabs", label: "Tabs" },
  { id: "dialog", label: "Dialog" },
  { id: "sheet", label: "Sheet" },
  { id: "tooltip", label: "Tooltip" },
  { id: "pagination", label: "Pagination" },
  { id: "stepper", label: "Stepper" },
  { id: "otp-input", label: "OTPInput" },
  { id: "confirm-modal", label: "ConfirmModal" },
  { id: "search-box", label: "SearchBox" },
  { id: "width-constraint", label: "WidthConstraint" },
];

export default function DocsPage() {
  // state for interactive demos
  const [otpValue, setOtpValue] = useState<string[]>(Array(6).fill(""));
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [stepperStep, setStepperStep] = useState(2);

  return (
    <div className="flex min-h-screen">
      {/* ---- Sidebar nav ---- */}
      <aside className="hidden lg:flex flex-col w-56 shrink-0 border-r sticky top-0 h-screen overflow-y-auto py-8 px-4 gap-1 text-sm">
        <p className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3">
          Components
        </p>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-md px-2 py-1.5 hover:bg-accent transition-colors"
          >
            {item.label}
          </a>
        ))}
      </aside>

      {/* ---- Main content ---- */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 space-y-16">
        <header>
          <h1 className="text-3xl font-bold tracking-tight">@resolut/ipap-shared</h1>
          <p className="text-muted-foreground mt-2">
            Interactive playground for every shared UI component.
          </p>
        </header>

        {/* ============================================================
            FORM PRIMITIVES
        ============================================================ */}

        <Section id="button" title="Button">
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">+</Button>
          </div>
          <div className="flex gap-3">
            <Button disabled>Disabled</Button>
          </div>
        </Section>

        <Section id="badge" title="Badge">
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </Section>

        <Section id="input" title="Input">
          <Input placeholder="Type something..." />
          <Input disabled placeholder="Disabled input" />
        </Section>

        <Section id="textarea" title="Textarea">
          <Textarea placeholder="Write a longer message..." />
        </Section>

        <Section id="password-input" title="PasswordInput">
          <PasswordInput placeholder="Enter password" />
        </Section>

        <Section id="label" title="Label">
          <div className="flex items-center gap-2">
            <Label htmlFor="label-demo">Email</Label>
            <Input id="label-demo" placeholder="you@example.com" className="max-w-xs" />
          </div>
        </Section>

        <Section id="checkbox" title="Checkbox">
          <div className="flex items-center gap-2">
            <Checkbox id="cb1" />
            <Label htmlFor="cb1">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="cb2" defaultChecked />
            <Label htmlFor="cb2">Pre-checked</Label>
          </div>
        </Section>

        <Section id="switch" title="Switch">
          <div className="flex items-center gap-2">
            <Switch id="sw1" />
            <Label htmlFor="sw1">Airplane mode</Label>
          </div>
        </Section>

        <Section id="radio-group" title="RadioGroup">
          <RadioGroup defaultValue="option-1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="r1" />
              <Label htmlFor="r1">Option One</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="r2" />
              <Label htmlFor="r2">Option Two</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="r3" />
              <Label htmlFor="r3">Option Three</Label>
            </div>
          </RadioGroup>
        </Section>

        <Section id="select" title="Select">
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Pick a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="cherry">Cherry</SelectItem>
              <SelectItem value="date">Date</SelectItem>
            </SelectContent>
          </Select>
        </Section>

        {/* ============================================================
            DISPLAY
        ============================================================ */}

        <Section id="avatar" title="Avatar">
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar className="size-12">
              <AvatarFallback className="text-lg">XL</AvatarFallback>
            </Avatar>
          </div>
        </Section>

        <Section id="skeleton" title="Skeleton">
          <div className="flex items-center gap-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </Section>

        <Section id="separator" title="Separator">
          <div>
            <p className="text-sm text-muted-foreground">Above the line</p>
            <Separator className="my-4" />
            <p className="text-sm text-muted-foreground">Below the line</p>
          </div>
          <div className="flex h-5 items-center gap-4 text-sm">
            <span>Blog</span>
            <Separator orientation="vertical" />
            <span>Docs</span>
            <Separator orientation="vertical" />
            <span>Source</span>
          </div>
        </Section>

        <Section id="card" title="Card">
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>A short description of the card contents.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                This is the body of the card. You can put any content here.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
        </Section>

        {/* ============================================================
            FEEDBACK / OVERLAY
        ============================================================ */}

        <Section id="accordion" title="Accordion">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that match your theme.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It uses CSS animations for smooth open/close transitions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Section>

        <Section id="tabs" title="Tabs">
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Account</TabsTrigger>
              <TabsTrigger value="tab2">Security</TabsTrigger>
              <TabsTrigger value="tab3">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <p className="text-sm text-muted-foreground">
                Manage your account settings and preferences.
              </p>
            </TabsContent>
            <TabsContent value="tab2">
              <p className="text-sm text-muted-foreground">
                Change your password and security options.
              </p>
            </TabsContent>
            <TabsContent value="tab3">
              <p className="text-sm text-muted-foreground">
                Configure how you receive notifications.
              </p>
            </TabsContent>
          </Tabs>
        </Section>

        <Section id="dialog" title="Dialog">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a dialog description. It can contain any content.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 text-sm">Dialog body content goes here.</div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Section>

        <Section id="sheet" title="Sheet">
          <div className="flex gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sheet (right)</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sheet Title</SheetTitle>
                  <SheetDescription>
                    A side panel that slides in from the edge.
                  </SheetDescription>
                </SheetHeader>
                <div className="p-4 text-sm">Sheet body content here.</div>
              </SheetContent>
            </Sheet>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Open Sheet (left)</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Left Sheet</SheetTitle>
                  <SheetDescription>Slides in from the left.</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </Section>

        <Section id="tooltip" title="Tooltip">
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </Section>

        {/* ============================================================
            NAVIGATION
        ============================================================ */}

        <Section id="pagination" title="Pagination">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" size="icon" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive size="icon">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" size="icon">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" size="icon">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" size="icon" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Section>

        {/* ============================================================
            CUSTOM COMPONENTS
        ============================================================ */}

        <Section id="stepper" title="Stepper">
          <p className="text-sm text-muted-foreground mb-2">
            Current step: {stepperStep}
          </p>
          <div className="flex gap-2 mb-6">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setStepperStep((s) => Math.max(1, s - 1))}
            >
              Prev
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setStepperStep((s) => Math.min(4, s + 1))}
            >
              Next
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-medium mb-2">Vertical</p>
              <Stepper
                currentStep={stepperStep}
                steps={[
                  { title: "Account", description: "Create your account" },
                  { title: "Profile", description: "Fill in your details" },
                  { title: "Review", description: "Review information" },
                  { title: "Complete", description: "All done!" },
                ]}
              />
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Horizontal</p>
              <Stepper
                orientation="horizontal"
                currentStep={stepperStep}
                steps={[
                  { title: "Account", description: "Create account" },
                  { title: "Profile", description: "Your details" },
                  { title: "Review", description: "Verify info" },
                  { title: "Done", description: "All set" },
                ]}
              />
            </div>
          </div>
        </Section>

        <Section id="otp-input" title="OTPInput">
          <OTPInput value={otpValue} onChange={setOtpValue} length={6} />
          <p className="text-sm text-muted-foreground">
            Value:{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded text-xs">
              {otpValue.join("")}
            </code>
          </p>
        </Section>

        <Section id="confirm-modal" title="ConfirmModal">
          <Button variant="destructive" onClick={() => setConfirmOpen(true)}>
            Delete Item
          </Button>
          <ConfirmModal
            isOpen={confirmOpen}
            onClose={() => setConfirmOpen(false)}
            onConfirm={() => {
              setConfirmOpen(false);
              alert("Confirmed!");
            }}
            title="Delete this item?"
            description="This action cannot be undone. The item will be permanently removed."
            confirmText="Delete"
            cancelText="Cancel"
          />
        </Section>

        <Section id="search-box" title="SearchBox">
          <SearchBox placeholder="Search..." width="320px" />
        </Section>

        <Section id="width-constraint" title="WidthConstraint">
          <WidthConstraint className="bg-muted/50 border border-dashed rounded-lg py-6 text-center text-sm text-muted-foreground">
            Content constrained to max-w-[1600px] (default)
          </WidthConstraint>
          <WidthConstraint
            isHome
            className="bg-muted/50 border border-dashed rounded-lg py-6 text-center text-sm text-muted-foreground"
          >
            Content constrained to max-w-[1300px] (isHome)
          </WidthConstraint>
        </Section>

        {/* ---- Footer ---- */}
        <footer className="border-t pt-8 text-center text-sm text-muted-foreground">
          @resolut/ipap-shared component documentation
        </footer>
      </main>
    </div>
  );
}
