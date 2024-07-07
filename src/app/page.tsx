"use client";

import { useState } from 'react';
import { UserButton, SignInButton, useAuth } from "@clerk/nextjs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from "@/components/ui/context-menu";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

enum ComponentType {
  BADGE = 'badge',
  BUTTON = 'button',
  CARD = 'card',
  CAROUSEL = 'carousel',
  COMMAND = 'command',
  CONTEXT_MENU = 'context_menu',
  DIALOG = 'dialog',
  DRAWER = 'drawer',
  DROPDOWN_MENU = 'dropdown_menu',
  INPUT = 'input',
  POPOVER = 'popover',
  SCROLL_AREA = 'scroll_area',
  SEPARATOR = 'separator',
}

interface ComponentViewerProps {
  type: ComponentType | null;
}

const ComponentViewer: React.FC<ComponentViewerProps> = ({ type }) => {
  const [open, setOpen] = useState(false);

  switch (type) {
    case ComponentType.BADGE:
      return <Badge>Badge</Badge>;
    case ComponentType.BUTTON:
      return <Button>Button</Button>;
    case ComponentType.CARD:
      return (
        <Card>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      );
    case ComponentType.CAROUSEL:
      return (
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="flex aspect-square items-center justify-center p-6 bg-slate-100 rounded-md">
                    Slide {index + 1}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      );
    case ComponentType.COMMAND:
      return (
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      );
    case ComponentType.CONTEXT_MENU:
      return (
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuItem>Team</ContextMenuItem>
            <ContextMenuItem>Subscription</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      );
    case ComponentType.DIALOG:
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    case ComponentType.DRAWER:
      return (
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      );
    case ComponentType.DROPDOWN_MENU:
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    case ComponentType.INPUT:
      return <Input placeholder="Type here..." />;
    case ComponentType.POPOVER:
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <label htmlFor="width">Width</label>
                  <Input
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <label htmlFor="maxWidth">Max. width</label>
                  <Input
                    id="maxWidth"
                    defaultValue="300px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <label htmlFor="height">Height</label>
                  <Input
                    id="height"
                    defaultValue="25px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <label htmlFor="maxHeight">Max. height</label>
                  <Input
                    id="maxHeight"
                    defaultValue="none"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      );
    case ComponentType.SCROLL_AREA:
      return (
        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
          Jokester began sneaking into the castle in the middle of the night and leaving
          jokes all over the place: under the king's pillow, in his soup, even in the
          royal toilet. The king was furious, but he couldn't seem to catch the jokester.
          Finally, he decided to set a trap: he put a piece of paper in the royal library
          that said "FREE JOKES," and waited. Sure enough, the jokester appeared.
          "I am the king!" the king shouted. "I hereby sentence you to death."
          "Your Majesty," the jokester replied, "I have a great joke for you. Why can't a king be sentenced to death?"
          The king was intrigued. "Why?" he asked.
          "Because he can always pardon himself!" the jokester said with a grin.
          The king laughed so hard he fell off his throne. "Oh, you're good," he said.
          "I'll tell you what. I'll spare your life, but on one condition: you have to tell me a new joke every day for the rest of your life."
          And so, the jokester became the king's official comedian, and they all lived happily ever after.
        </ScrollArea>
      );
    case ComponentType.SEPARATOR:
      return (
        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      );
    default:
      return <p className="text-center text-gray-500 italic">Select a component to view</p>;
  }
};


const componentList = Object.values(ComponentType).map(type => ({ type, name: type.replace(/_/g, ' ') }));

export default function Home() {
  const { isLoaded, userId } = useAuth();
  const [selectedComponent, setSelectedComponent] = useState<ComponentType | null>(null);

  if (!isLoaded) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">UI Component Viewer</h1>
          {userId ? <UserButton /> : <SignInButton mode="modal"><Button>Sign In</Button></SignInButton>}
        </div>
      </header>

      {userId ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left sidebar with component list */}
            <div className="w-full md:w-1/4">
              <h2 className="text-xl font-semibold mb-4">Components</h2>
              <div className="bg-white shadow rounded-lg overflow-hidden">
                {componentList.map((component) => (
                  <Button
                    key={component.type}
                    variant={selectedComponent === component.type ? "secondary" : "ghost"}
                    className="w-full justify-start rounded-none border-b last:border-b-0"
                    onClick={() => setSelectedComponent(component.type)}
                  >
                    {component.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Right side component viewer */}
            <div className="w-full md:w-3/4">
              <h2 className="text-xl font-semibold mb-4">Component Viewer</h2>
              <Card className="p-6 min-h-[200px] flex items-center justify-center">
                <ComponentViewer type={selectedComponent} />
              </Card>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto mt-20 px-4">
          <Card>
            <CardContent className="text-center py-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to UI Component Viewer</h2>
              <p className="text-gray-600 mb-6">Please sign in to view UI components.</p>
              <SignInButton mode="modal">
                <Button size="lg">Get Started</Button>
              </SignInButton>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  );
}
