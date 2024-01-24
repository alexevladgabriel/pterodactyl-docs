<script setup>
import Button from './Button.vue';
import { GithubIcon } from 'lucide-vue-next';
</script>

<template>
    <section id="hero" class="max-w-[var(--vp-layout-max-width)] px-8 mx-auto mt-8 md:mt-12 xl:mt-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 space-y-12 lg:space-y-0">
            <div class="space-y-10 flex flex-col items-center text-center lg:text-left lg:items-start">
                <div class="md:max-w-lg">
                    <span class="text-gray-400 text-sm lg:text-base">The #1 software for your game servers</span>
                    <div class="space-y-8 mt-6">
                        <h1 class="text-3xl md:text-6xl font-bold">Get total control over your game servers now</h1>
                        <p>Free, open-source game server management panel</p>
                    </div>
                </div>
                <div class="space-x-3 flex">
                    <Button
                        class="!rounded-md !flex items-center"
                        theme="brand"
                        size="big"
                        href="/panel/1.0/getting_started"
                    >
                        <template #text>Get started</template>
                    </Button>
                    <Button
                        class="!rounded-md !flex items-center"
                        theme="alt"
                        size="big"
                        href="https://github.com/pterodactyl/panel"
                    >
                        <template #icon>
                            <GithubIcon class="mr-2" />
                        </template>
                        <template #text>GitHub</template>
                    </Button>
                </div>
            </div>
            <div class="bg-emerald-700 rounded-lg">
                <iframe
                    class="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/_ypAmCcIlBE?si=7V1cOXzrOAFG2KI3"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </section>
</template>
