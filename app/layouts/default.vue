<script setup lang="ts">
onMounted(() => {
    // Adding an empty listener to the body enables :active styles in iOS Safari
    document.body.addEventListener('touchstart', () => {}, { passive: true });
});
onBeforeUnmount(() => {
    document.body.removeEventListener('touchstart', () => {});
});
</script>

<template>
    <div class="default-layout min-h-screen container mx-auto flex flex-col">
        <div class="flex-auto">
            <slot />
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>
