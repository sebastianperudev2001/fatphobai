import React, { useEffect, useState } from "react";
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
import { createClient } from "@supabase/supabase-js";

// Utility function to format Unix timestamp into readable date format
const formatTimestamp = (timestamp: string) => {
  if (!timestamp) return "";
  const date = new Date(timestamp); // Parse ISO 8601 format directly
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);
console.log(supabase);

const Tabledata = () => {
  interface Record {
    id: number;
    timestamp: number;
    // Add other fields as necessary
  }

  const [records, setRecords] = useState<Record[]>([]);

  const fetchCountries = async () => {
    const { data: records } = await supabase.from("DietRecords").select();
    console.log(records);
    return records;
  };

  useEffect(() => {
    fetchCountries().then((data) => {
      if (data) {
        setRecords(data);
      }
    });
  }, []);

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
        <TableBody items={records}>
          {(record) => (
            <TableRow key={record.id}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "created_at"
                    ? formatTimestamp(getKeyValue(record, columnKey))
                    : getKeyValue(record, columnKey)}
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
