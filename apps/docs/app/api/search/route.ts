import { allDocs } from "contentlayer/generated";
import { initSearchAPI } from "next-docs/server";

export const { GET } = initSearchAPI(
    allDocs.map((docs) => ({
        title: docs.title,
        content: docs.body.raw,
        url: docs.url,
    }))
);
