// ── Lib / Utilities ─────────────────────────────────────────────
export { convertBase64ToFile, convertFileToBase64 } from "./lib/file-utils";
export { cn } from "./lib/utils";

// ── Hooks ───────────────────────────────────────────────────────
export { useIsMobile } from "./hooks/use-mobile";

// ── Interfaces / Types ──────────────────────────────────────────
export type { SearchBoxProps } from "./interfaces/ui";

// ── UI Components ───────────────────────────────────────────────

// Accordion
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

// Alert Dialog
export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";

// Avatar
export { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

// Badge
export { Badge, badgeVariants } from "./components/ui/badge";

// Button
export { Button, buttonVariants } from "./components/ui/button";

// Card
export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

// Carousel
export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./components/ui/carousel";

// Checkbox
export { Checkbox } from "./components/ui/checkbox";

// Command
export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./components/ui/command";

// Confirm Modal
export { ConfirmModal } from "./components/ui/confirm-modal";

// Dialog
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";

// Dropdown Menu
export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";

// Input
export { Input } from "./components/ui/input";

// Label
export { Label } from "./components/ui/label";

// OTP Input
export { OTPInput } from "./components/ui/otp-input";

// Pagination
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./components/ui/pagination";

// Password Input
export { PasswordInput } from "./components/ui/password-input";

// Popover
export {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";

// Premium Shield Terms
export { PremiumShieldTerms } from "./components/ui/premium-shield-terms";

// Radio Group
export { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";

// Scroll Area
export { ScrollArea, ScrollBar } from "./components/ui/scroll-area";

// Search Box
export { default as SearchBox } from "./components/ui/search-box";

// Select
export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

// Separator
export { Separator } from "./components/ui/separator";

// Sheet
export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./components/ui/sheet";

// Sidebar
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "./components/ui/sidebar";

// Skeleton
export { Skeleton } from "./components/ui/skeleton";

// Stepper
export { Stepper, type Step } from "./components/ui/stepper";

// Switch
export { Switch } from "./components/ui/switch";

// Table
export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";

// Tabs
export { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

// Textarea
export { Textarea } from "./components/ui/textarea";

// Tooltip
export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";

// Width Constraint
export { default as WidthConstraint } from "./components/ui/width-constraint";
