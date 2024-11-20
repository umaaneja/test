
<template>
  <div class="markdown-page">
    <h1>Markdown Previewer</h1>
    <MarkdownEditor />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import MarkdownEditor from '../components/MarkdownEditor.vue';

export default defineComponent({
  name: 'MarkdownPage',
  components: {
    MarkdownEditor,
  },
});
</script>

<style scoped>
.markdown-page {
  text-align: center;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
  font-size: 2rem;
}
</style>
    