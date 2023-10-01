import { useSearchParams } from "react-router-dom";
const LIMIT = 10;
export default function usePage() {
  const [searchParams] = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());
  const result = { page: Number(paramsObject.page) || 1, limit: LIMIT };
  return result;
}
