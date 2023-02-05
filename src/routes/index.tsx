import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { IconLogo } from "~/components/icons";
import { Navigation } from "~/components/navigation/navigation";

export default component$(() => {
  return (
    <header class="header">
      <IconLogo />
      <Navigation />
    </header>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
