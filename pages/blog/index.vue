<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <div class="mx-auto max-w-5xl px-6 py-16">
      <header class="mb-12 space-y-3 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
          Blog
        </p>
        <h1 class="text-4xl font-bold sm:text-5xl">Notes and stories</h1>
        <p class="text-lg text-gray-300">
          Fresh posts from projects, experiments, and ideas in progress.
        </p>
      </header>

      <div v-if="pending" class="text-center text-gray-400">Loading posts…</div>
      <div v-else-if="error" class="space-y-2 text-center text-red-300">
        <div>Failed to load posts.</div>
        <div class="text-sm text-red-200">{{ error?.message }}</div>
      </div>
      <div v-else-if="visiblePosts.length === 0" class="text-center text-gray-400">
        No posts yet.
      </div>

      <div v-else class="grid gap-6 sm:grid-cols-2">
        <article
          v-for="post in visiblePosts"
          :key="post.path"
          class="group rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/15 cursor-pointer"
        >
          <NuxtLink :to="post.path" :key="post.id" class="block space-y-3">
            <div class="flex items-center gap-3 text-sm text-gray-400">
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
            <div class="space-y-2">
              <h2 class="text-2xl font-semibold text-white group-hover:text-gray-200">
                {{ post.title }}
              </h2>
              <p class="text-gray-300">{{ post.description }}</p>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())
const visiblePosts = computed(() => posts.value || []);

useSeoMeta({
  title: "Blog",
  description: "Notes, experiments, and stories from projects in progress.",
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
