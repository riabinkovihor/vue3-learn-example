import addTemplate from "../../helpers/addTemplate.js"

const htmlTemplate = await addTemplate('./components/VueButton/VueButton.html')

const VueButton = {
    template: htmlTemplate,
    props:{
        active: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: ''
        }
    }
}
export default VueButton
