class DOMManipulatons {
    static UpdateStyle = (styleHolderID,styleContent) => {
        let styleElement = document.getElementById(styleHolderID);
        if(!styleElement){
            document.querySelector('head').insertAdjacentHTML('beforeend',`
                <style id="${styleHolderID}">
                    ${styleContent}
                </style>
            `)
            return null;
        } 

        styleElement.innerText = styleContent;
    }
}

export default DOMManipulatons;