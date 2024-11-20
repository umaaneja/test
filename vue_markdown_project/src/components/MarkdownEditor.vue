
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
import { defineComponent, watch } from 'vue';
import { useMarkdownStore } from '../stores/markdownStore';

export default defineComponent({
  name: 'MarkdownEditor',
  setup() {
    const { markdown, safeHTML, updatePreview } = useMarkdownStore();

    // Watch for markdown changes and update preview accordingly
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
    