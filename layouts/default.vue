<template>
    <slot />

    <teleport to="body">
        <footer class="absolute bottom-0 flex flex-col items-center justify-center h-[10vh] px-12 md:px-24 w-full">
            <p class="text-gray-500">
                Made with love by <NuxtLink class="underline" to="https://github.com/cblokkeel" target="_blank">@cblokkeel</NuxtLink>
            </p>
        </footer>
    </teleport>
</template>
