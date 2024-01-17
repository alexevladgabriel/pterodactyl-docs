<script setup>
import { VPButton } from 'vitepress/theme';
</script>

<template>
    <section id="hero">
        <div
            class="absolute inset-0 bottom-10 bg-bottom bg-no-repeat bg-gradient-to-b from-[#10529f] to-slate-300 dark:to-zinc-900"
        >
            <div
                id="test"
                class="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
            ></div>
        </div>
        <div class="flex flex-col relative z-10 items-center">
            <img class="h-48" src="/logos/pterry.svg" alt="Pterodactyl" />
            <h1 class="tagline font-semibold mb-4">Pterodactyl</h1>
            <VPButton text="Let's Get Started!" href="/panel/1.0/getting_started" />
        </div>
    </section>
</template>

<style scoped>
#hero {
    padding: 96px 32px;
    text-align: center;
}

.tagline {
    background: -webkit-linear-gradient(317deg, #10529f 25%, #1f65b4);
    font-size: 45px;
    line-height: 1.25;
    letter-spacing: -1.5px;
    margin-top: 2rem;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

html:not(.dark) .accent,
.dark .tagline {
    background-image: -webkit-linear-gradient(317deg, #1f65b4 25%, #10529f 75%);
}

:is(.dark .dark\:bg-grid-slate-400\/\[0\.05\]) {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}

.bg-grid-slate-900\/\[0\.04\] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
</style>
