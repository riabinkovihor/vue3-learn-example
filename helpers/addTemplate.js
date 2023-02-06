const addTemplate = async function (templateFile) {
    return await (await fetch(`${templateFile}`)).text();
}

export default addTemplate
