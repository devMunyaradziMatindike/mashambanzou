import { AdminLoginForm } from "./ui";

export default function AdminLoginPage({
  searchParams,
}: {
  searchParams?: { next?: string };
}) {
  return <AdminLoginForm nextPath={searchParams?.next ?? "/admin"} />;
}

