<script setup lang="ts">
const route = useRoute();
const reposParam = route.query.repos;

const repos = ref<{
    link: string;
    name: string;
}[]>([]);

if (reposParam) {
    repos.value = (reposParam as string).split(",").map((r) => {
        return {
            link: `https://github.com/${r}`,
            name: r.split("/")[1],
        }
    });
}
</script>

<template>
    <UPage class="flex flex-col gap-8 h-full items-center overflow-y-scroll py-24">
        <UContainer class="flex flex-col items-center justify-center gap-4 w-full" v-if="repos.length">

            <NuxtLink v-for="(r, idx) in repos" :key="idx" :to="r.link" target="_blank"
                class="w-48 border border-orange-500 py-4 rounded hover:-translate-y-1 hover:border-2">
                <div class="flex justify-center items-center gap-1">
                    <UIcon name="i-mdi-github" class="w-5 h-5" />
                    {{ r.name }}
                </div>
            </NuxtLink>

        </UContainer>

        <UContainer class="flex flex-col items-center justify-center gap-1 w-full" v-else>
            <p>Provide your repositories using the <span class="font-mono">repos</span> query param, separated by a <span>comma</span></p>
            <p>Example : <span class="font-mono">?repos=username/repo1,username/repo2</span></p>
        </UContainer>
    </UPage>
</template>
