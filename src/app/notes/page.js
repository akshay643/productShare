import { createClient } from "@supabase/supabase-js";

export default async function Notes() {
  const supabase = createClient(
    "https://mtjrgnvgcxndbyloxrqg.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10anJnbnZnY3huZGJ5bG94cnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxMzk2NTMsImV4cCI6MjAxODcxNTY1M30.I9tI8eYhIpQIXrFUi45pSPwkXZZHT7VDlJY55u3gjtU"
  );
  let notes = await supabase.from("notes").select("*");

  console.log("notes", notes);

  return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}
