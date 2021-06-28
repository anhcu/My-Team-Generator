function LoadTabs(){
    tabs.forEach(tab => {
        const cardDiv = document.getElementById('card')
        const titleDiv = document.createElement('div')
        titleDiv.id = tab.id;
        titleDiv.classList.add('title')

        const labelTitle = document.createElement('h5')
        labelTitle.classList.add('card-title')
        labelTitle.innerText=tab.name
        
        const lableRole = document.createElement('h5')
        lableRole.id = 'role' + tab.id
        lableRole.classList.add("card-title")
        lableRole.innerText= tab.role + " Name"
       
        titleDiv.append(labelTitle)
        titleDiv.append(lableRole)
        cardDiv.append(titleDiv)

        const bodyDiv = document.createElement('div')
        bodyDiv.id = tab.id;
        bodyDiv.classList.add('card-body')

        const labelID = document.createElement('p')
        labelID.classList.add('card-text')
        labelID.innerText= "ID:" + tab.id
        
        const labelEmail = document.createElement('p')
        labelEmail.classList.add('card-text')
        labelEmail.innerText= "Email:" + tab.email

        const labelOffice = document.createElement('p')
        labelOffice.classList.add('card-text')
        labelOffice.innerText= "Office Number:" + tab.officeNumber
       
        bodyDiv.append(labelID)
        bodyDiv.append(labelEmail)
        bodyDiv.append(labelOffice)
        cardDiv.append(bodyDiv)

        // const textArea = document.createElement('h5')
        // lableRole.id = 'txtArea' + tab.id
        // lableRole.classList.add("card-title")
        // lableRole.innerText= tab.role + " Name"
    


        // const parentDiv = document.getElementById('card-body')
        // const childDiv = document.createElement('div')
        // titleDiv.id = tab.id;
        // titleDiv.classList.add('row')

        // const textArea = document.createElement('id')
        // lableRole.id = 'txtArea' + tab.id
        // lableRole.classList.add("card-body")
        // lableRole.innerText=tab.id

        // const textArea = document.createElement('emmail')
        // lableRole.id = 'txtArea' + tab.id
        // lableRole.classList.add("card-body")
        // lableRole.innerText=tab.emmail

        // const textArea = document.createElement('github')
        // lableRole.id = 'txtArea' + tab.id
        // lableRole.classList.add("card-body")
        // lableRole.innerText=tab.github


     



        // const textArea = document.createElement('textarea')
        // textArea.id = 'txtArea' + tab.id
        // textArea.classList.add("col mb-3")
        // textArea.classList.add('name') 

        // const textArea = document.createElement('textarea')
        // textArea.id = 'txtArea' + tab.id
        // textArea.classList.add("col mb-3")
        // textArea.classList.add('input')  

        // childDiv.appendChild(labelDiv)
        // childDiv.appendChild(textArea)
        // parentDiv.appendChild(childDiv)
      })
}