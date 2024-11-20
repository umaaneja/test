
<template>
  <div class="markdown-editor">
    <textarea
      v-model="markdown"
      placeholder="Write your Markdown here..."
      class="markdown-input"
    ></textarea>
    <div v-html="safeHTML" class="markdown-preview"></div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import marked from 'marked';
import DOMPurify from 'dompurify';

export default defineComponent({
  name: 'MarkdownEditor',
  setup() {
    const markdown = ref('## Markdown 🛫
Write your Markdown content here...');
    const safeHTML = ref('');

    const updatePreview = () => {
      const rawHTML = marked(markdown.value);
      safeHTML.value = DOMPurify.sanitize(rawHTML);
    };

    watch(markdown, updatePreview, { immediate: true });

    return {
      markdown,
      safeHTML,
    };
  },
});
</script>

<style scoped lang="scss">
.markdown-editor {
  display: flex;
  width: 100%;
  height: 100vh;
}

.markdown-input {
  width: 50%;
  height: 100%;
  padding: 15px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  border: 1px solid #ccc;
  resize: none;
  overflow-y: auto;
}

.markdown-preview {
  width: 50%;
  height: 100%;
  padding: 15px;
  background-color: #f9f9f9;
  border-left: 1px solid #ccc;
  overflow-y: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}
</style>
    