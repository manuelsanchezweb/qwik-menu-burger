import { $, component$, useOnWindow, useStore } from "@builder.io/qwik";
import { IconClose, IconMenu } from "../icons";

export const Navigation = component$(() => {
  const store = useStore({
    isNavOpen: false,
    windowWidth: 0,
  });

  useOnWindow(
    "load",
    $(() => {
      store.windowWidth = window.innerWidth;
    })
  );

  useOnWindow(
    "resize",
    $(() => {
      store.windowWidth = window.innerWidth;
    })
  );

  return (
    <nav>
      {/* Desktop Menu  */}
      {store.isNavOpen || store.windowWidth > 768 ? (
        <ul class={store.isNavOpen ? "open" : ""}>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/about">Sobre mí</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      ) : (
        ""
      )}
      {/* Open Button  */}
      {!store.isNavOpen ? (
        <button
          class="nav-open"
          aria-label="Open Menu"
          onClick$={() => (store.isNavOpen = !store.isNavOpen)}
        >
          <IconMenu />
        </button>
      ) : (
        ""
      )}
      {/* Close Button  */}
      {store.isNavOpen ? (
        <button
          class="nav-close"
          aria-label="Close Menu"
          onClick$={() => (store.isNavOpen = !store.isNavOpen)}
        >
          <IconClose />
        </button>
      ) : (
        ""
      )}
    </nav>
  );
});
