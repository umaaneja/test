
import { defineStore } from 'pinia';
import { ref } from 'vue';
import marked from 'marked';
import DOMPurify from 'dompurify';

export const useMarkdownStore = defineStore('markdown', () => {
  const markdown = ref('## Markdown 🛫\nWrite your Markdown content here...');
  const safeHTML = ref('');

  function updatePreview() {
    const rawHTML = marked(markdown.value);
    safeHTML.value = DOMPurify.sanitize(rawHTML);
  }

  return {
    markdown,
    safeHTML,
    updatePreview,
  };
});
    