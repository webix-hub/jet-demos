// dynamic import of views
const modules = import.meta.glob("./**/*.js");
export const views = name => {
    const mod = modules[`./${name.replace(/\./g, "/")}.js`];
    if (!mod)
        return modules["./404.js"]().then(x => x.default);

    return mod().then(x => x.default)
};