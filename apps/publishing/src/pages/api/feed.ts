import type { APIRoute } from "astro";
import { success } from "@continuum-ai/utilities";

export const get: APIRoute = function ({ params }) {
  return success([
    {
      title: "One Photographer's Incredibly Initimate Portrait Of Her Sister",
      date: "22/02/2023 15:47:23",
      category: "Photography",
      public_id: "awd",
      cover: "https://picsum.photos/400/400",
    },
    {
      title: "Inside The GLobal Fashon Summit Attempting To Un-Fuck The Planet",
      date: "22/02/2023 15:47:23",
      category: "Fashion",
      public_id: "awd",
      cover: "https://picsum.photos/300/600",
    },
    {
      title: "Transforming The Neo-Classical Villa Into A Concrete Masterwork",
      date: "21/02/2023 14:10:23",
      category: "Architecture",
      public_id: "awd",
      cover: "https://picsum.photos/600/300",
    },
  ]);
};
