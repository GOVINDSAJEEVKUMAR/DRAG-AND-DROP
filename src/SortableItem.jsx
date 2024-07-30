import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Card from "react-bootstrap/Card"

export function SortableItem(props){

const {
    attribute,
    listeners,
    setNodeRef,
    transform,
    transition
}
   = useSortable({id:props.id});


   const style ={
    transform:CSS.Transform.toString(transform),
    transition
   }

   return (
    <div ref={setNodeRef} style={style} {...listeners} {...attribute}>

        <Card body className="p-3 gap-10 mt-8 font-semibold">
            {props.id}
        </Card>

    </div>
   )
}