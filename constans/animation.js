export const hiddenAnimation = {
    x: -100,
    opacity: 0,
};

export const hiddenBottomAnimation = {
    y: 100,
    opacity: 0,
};

export const hiddenTopAnimation = {
    y: -20,
    opacity: 0,
}

export const visibleAnimation = (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
});

export const visibleBottomAnimation = (customBottom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: customBottom * 0.2 },
});

export const visibleTopAnimation = (customTop) => ({
    y: 0,
    opacity: 1,
    transition: { delay: customTop * 0.2}
})