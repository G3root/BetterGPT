import { createFileRoute, Outlet } from "@tanstack/react-router";
import { ChatLayout } from "~/layouts/chat-layout";

export const Route = createFileRoute("/_chat-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <ChatLayout>
      <Outlet />
    </ChatLayout>
  );
}
