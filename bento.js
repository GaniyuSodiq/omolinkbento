function createFormLink(){
    const root = {
        container: document.createElement('div'),
        urlField: document.createElement('input'),
        titleField: document.createElement('input'),
        descriptionField: document.createElement('input'),
        removeButton: document.createElement('button')
    }

    root.container.classList.add('links')
    root.container.appendChild(root.removeButton)
    root.container.appendChild(root.urlField)
    root.container.appendChild(root.titleField)
    root.container.appendChild(root.descriptionField)

    root.urlField.placeholder = 'URL'
    root.urlField.name = 'url-name'
    root.titleField.placeholder = 'TITLE'
    root.titleField.name = 'title-name'
    root.descriptionField.placeholder = 'DESCRIPTION'
    root.descriptionField.name = 'description-name'
    root.removeButton.innerText = 'Remove'

    root.removeButton.addEventListener('click', () => {
        root.container.remove()
    })

    return root.container

}

function main(){
    const links = document.getElementById('links')
    links.appendChild(createFormLink())
}


main()