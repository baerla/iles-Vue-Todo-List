/** @format */

import { defineApp } from 'iles';
import { computed } from "vue";

export default defineApp({
    head({ frontmatter, site }) {
        return {
            meta: [
                { property: 'Favour Todo', content: site.title },
                { property: 'keywords', content: computed(() => frontmatter.tags )},
            ],
        };
    },
});
