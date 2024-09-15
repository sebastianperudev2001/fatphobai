import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import { columns, rows } from "@/data/table_dashboard";
import { Divider } from "@nextui-org/divider";

// Utility function to format Unix timestamp into readable date format
const formatTimestamp = (timestamp: number) => {
  if (!timestamp) return "";
  const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const Tabledata = () => {
  return (
    <>
      <Divider className="my-4" />
      <h1 className="text-white text-large">Records data 💪</h1>
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "timestamp"
                    ? formatTimestamp(getKeyValue(item, columnKey))
                    : getKeyValue(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default Tabledata;
