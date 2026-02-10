<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <div class="mx-auto max-w-3xl px-6 py-16">
      <NuxtLink
        to="/blog"
        class="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white"
      >
        ← Back to all posts
      </NuxtLink>

      <article v-if="post" class="space-y-8">
        <header class="space-y-4">
          <p class="text-sm uppercase tracking-[0.3em] text-gray-400">Blog</p>
          <h1 class="text-4xl font-bold text-white sm:text-5xl">{{ post.title }}</h1>
          <div class="flex flex-wrap items-center gap-3 text-sm text-gray-400">
            <span class="rounded-full bg-white/5 px-3 py-1 font-medium">
              {{ formatDate(post.meta.date) }}
            </span>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in post.meta.tags || []"
                :key="tag"
                class="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </header>

        <ContentRenderer  class="prose prose-invert" :value="post">
          <template #empty>
            <p class="text-gray-400">This post has no content yet.</p>
          </template>
        </ContentRenderer>
      </article>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: 'blog-page',
    mode: 'out-in',
  },
});

const route = useRoute();
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

if (!post.value) {
  throw createError({ statusCode: 404, message: "Post not found" });
}
console.log('Loaded post:', post.value);

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
});

const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
</script>
<style>

</style>