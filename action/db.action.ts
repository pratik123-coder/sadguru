"use server"

import { db } from "@/lib/db"

export async function getTableData(tableName: string) {
  let data;

  switch (tableName) {
    case "Admission":
      data = await db.admission.findMany();
      break;
    case "Contact":
      data = await db.contact.findMany();
      break;
    case "Courses":
      data = await db.courses.findMany();
      break;
    default:
      throw new Error("Invalid table name");
  }

  return data;
}

