import { MenuIcon } from "lucide-react"
import NewDocumentButton from "./NewDocumentButton"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


function Sidebar(){



return <>
<div className="p-4">

<div className="md:hidden inline">

<Sheet>
  <SheetTrigger>
    <MenuIcon className="cursor-pointer"/>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
     <NewDocumentButton/>
       
    </SheetHeader>
  </SheetContent>
</Sheet>


</div>




<div className="hidden md:inline">
    <NewDocumentButton/>
</div>

</div>
</>

}

export default Sidebar