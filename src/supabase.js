import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qhsxmcuoqnyhlmfwwkct.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoc3htY3VvcW55aGxtZnd3a2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMzk0ODYsImV4cCI6MTk5NjYxNTQ4Nn0.pAC7MMzH0CtvgT63TU1iEE8hEdBvVoSt95RWKFuQyEY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
