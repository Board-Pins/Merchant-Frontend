import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import ItemsColumn from "./kanban/itemsColumn";
import StrictModeDroppable from "./kanban/droppable";
import { reorder } from "../../../utils/helpers/helpers";
import { initialColumnData } from "../../../utils/helpers/constants";
import toast, { Toaster } from "react-hot-toast";

const KanbanTodoList = () => {
  const [columnData, setColumnData] = useState(initialColumnData);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) {
      return;
    }

    const sInd = source.droppableId;
    const dInd = destination.droppableId;

    // Get item details
    const item = columnData[sInd].items[source.index];
    const itemTitle = item.title;
    const itemId = item.id;
    const newIndex = destination.index;
    const destinationColumn = columnData[dInd];
    const destinationColumnId = destinationColumn.id;
    const destinationColumnTitle = destinationColumn.title;

    // Log details
    console.log(`Item ID: ${itemId}, Item Title: ${itemTitle}, New Index: ${newIndex}, Destination Column ID: ${destinationColumnId}, Destination Column Title: ${destinationColumnTitle}`);

    // Display toast
    toast.success(` Status updated to column  ${destinationColumnTitle}`);

    // REORDER: if source and destination droppable ids are same
    if (sInd === dInd) {
      const column = columnData[sInd];
      const reorderedItems = reorder(column.items, source.index, destination.index);

      setColumnData({
        ...columnData,
        [sInd]: {
          ...column,
          items: reorderedItems,
        },
      });
    } else {
      const sourceColumn = columnData[sInd];
      const desColumn = columnData[dInd];

      const itemToDrop = sourceColumn.items.find(
        (item) => item.id.toString() === result.draggableId
      );

      // INSERT: dragged item to another column
      if (itemToDrop) {
        const sourceColumnItems = Array.from(sourceColumn.items);
        const destColumnItems = Array.from(desColumn.items);

        sourceColumnItems.splice(result.source.index, 1);
        destColumnItems.splice(result.destination.index, 0, itemToDrop);

        setColumnData({
          ...columnData,
          [sInd]: {
            ...sourceColumn,
            items: sourceColumnItems,
          },
          [dInd]: {
            ...desColumn,
            items: destColumnItems,
          },
        });
      }
    }
  };

  return (
    <div className="">
      <Toaster
        toastOptions={{
          style: {
            marginLeft: '10px',
          },
        }}
        position="bottom-left"
      />
      <div className="grid lg:grid-cols-3  grid-cols-1 lg:gap-x-4 justify-between">
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.entries(columnData).map(([id, column]) => (
            <StrictModeDroppable droppableId={id} key={id}>
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <ItemsColumn columnTitle={column.title} columnId={column.id} items={column.items} />
                  {provided.placeholder}
                </div>
              )}
            </StrictModeDroppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
};

export default KanbanTodoList;
