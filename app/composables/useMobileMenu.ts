export const useMobileMenu = () => {
    const isOpen = ref(false);

    const toggle = () => {
        isOpen.value = !isOpen.value;
        handleBodyScroll(isOpen.value);
    };

    const close = () => {
        isOpen.value = false;
        handleBodyScroll(false);
    };

    const handleBodyScroll = (lock: boolean) => {
        if (lock) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    // Ensure scroll is unlocked when component using this composable is unmounted
    onUnmounted(() => {
        handleBodyScroll(false);
    });

    return {
        isOpen,
        toggle,
        close
    };
};
