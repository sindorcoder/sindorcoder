import { Link, Outlet } from "react-router-dom";
import { Button } from "../ui/button";
import { buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { X, Plus } from "lucide-react";
import { cn } from "../../lib/utils";
import { Dock, DockIcon } from "../magicui/dock";
import { DATA } from "../ui/Icons";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-center">
        <div className="fixed flex items-end justify-center bottom-3 gap-5 z-10">
          <TooltipProvider>
            <Dock direction="middle" className="bg-gray-300">
              {DATA.navbar.map((item) => (
                <DockIcon key={item.label} className="bg-transparent">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        to={item.href}
                        aria-label={item.label}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 rounded-full"
                        )}
                      >
                        <item.icon className="size-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
              <Separator orientation="vertical" className="h-full hidden md:block" />
              {Object.entries(DATA.contact.social).map(([name, social]) => (
                <DockIcon key={name} className=" hidden md:flex">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={social.url}
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 rounded-full"
                        )}
                      >
                        <social.icon className="size-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
            </Dock>
          </TooltipProvider>
          <div className="flex flex-col md:hidden items-center gap-3">
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  onClick={() => setOpen(!open)}
                  variant="ghost"
                  size="icon"
                  className="!px-7 !py-7 outline-none bg-gray-300"
                >
                  {!open ? <Plus /> : <X />}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="!bg-transparent !px-10  !shadow-none !border-none"
              >
                {Object.entries(DATA.contact.social).map(([name, social]) => (
                  <DropdownMenuItem className="!bg-transparent" key={name}>
                    <Button
                      variant="ghost"
                      size="default"
                      className="rounded-lg bg-muted/20 bg-gray-300  backdrop-blur-md hover:bg-muted transition-all duration-300 shadow-md"
                    >
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              to={social.url}
                              aria-label={social.name}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <social.icon className="size-4" />
                            </Link>
                          </TooltipTrigger>
                        </Tooltip>
                      </TooltipProvider>
                    </Button>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
