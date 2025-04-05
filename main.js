const divs_map = new Map()
const buttons_map = new Map()

const project_id   = 0b0001
const education_id = 0b0010
const skills_id    = 0b0100
const research_id  = 0b1000

let current_id     = 0b0000

divs_map.set(project_id, document.getElementById("projects_div"))
divs_map.set(education_id, document.getElementById("education_div"))
divs_map.set(skills_id, document.getElementById("skills_div"))
divs_map.set(research_id, document.getElementById("researchs_div"))

let disable_div = div => {
    div.style.display = 'none'
}

let enable_div = div => {
    div.style.display = 'block'
}

let on_off = (id) => {
    console.log(`${current_id} ${id} ${current_id & id}`)
    if (!(current_id & id)) {
        
        if (current_id !== 0b0000) {
            disable_div(divs_map.get(current_id))
            buttons_map.get(current_id).classList.remove("selected_button")
        }

        console.log(divs_map.get(id))
        enable_div(divs_map.get(id))
        buttons_map.get(id).classList.add("selected_button")

        current_id = id
    }
}

divs_map.forEach(disable_div)

document.getElementById("projects_button").addEventListener("click", (event) => on_off(project_id))
document.getElementById("education_button").addEventListener("click", (event) => on_off(education_id))
document.getElementById("skills_button").addEventListener("click", (event) => on_off(skills_id))
document.getElementById("research_button").addEventListener("click", (event) => on_off(research_id))

buttons_map.set(project_id, document.getElementById("projects_button"))
buttons_map.set(education_id, document.getElementById("education_button"))
buttons_map.set(skills_id, document.getElementById("skills_button"))
buttons_map.set(research_id, document.getElementById("research_button"))