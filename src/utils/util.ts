const getImagePrefix = () => {
    return process.env.NODE_ENV === "production"
        ? "/KienVan/"
        : "";
};

export { getImagePrefix };