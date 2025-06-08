
import { Link, Outlet } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "../../lib/utils";
import { Dock, DockIcon } from "../magicui/dock";
import { DATA } from "../ui/Icons"


const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col items-center justify-center fixed bottom-3 left-0 w-full z-10">

        <TooltipProvider className="w-full">
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
            <Separator orientation="vertical" className="h-full" />
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to={social.url}
                      aria-label={social.name}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full"
                      )}
                    >
                      <social.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          </Dock>
        </TooltipProvider>
      </div>
      <Outlet/>
    </nav>
  );
};

export default Navbar;
