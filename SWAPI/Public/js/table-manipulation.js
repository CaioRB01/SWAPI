
function createNewLineName(name){
    let newLineName = document.createElement("th")
    newLineName.setAttribute("scope", "row")
    newLineName.style.color = "#ffe81f"
    newLineName.append(document.createTextNode(name))
    return newLineName
}

function createNewLineHeight(height){
    let newLineHeight = document.createElement("td")
    newLineHeight.style.color = "#ffe81f"
    newLineHeight.append(document.createTextNode(height))
    return newLineHeight
}

function createNewLineMass(mass){
    let newLineMass = document.createElement("td")
    newLineMass.style.color = "#ffe81f"
    newLineMass.append(document.createTextNode(mass))
    return newLineMass
}

function createNewLineGender(gender){
    let newLineGender = document.createElement("td")
    newLineGender.style.color = "#ffe81f"
    newLineGender.append(document.createTextNode(gender))
    return newLineGender
}

function createNewRow(name,height,mass,gender){
    let newRow = document.createElement("tr")
    newRow.append(createNewLineName(name))
    newRow.append(createNewLineHeight(height))
    newRow.append(createNewLineMass(mass))
    newRow.append(createNewLineGender(gender))
    return newRow
}
