import VueButton from "../VueButton/VueButton.js";
import addTemplate from "../../helpers/addTemplate.js"

const htmlTemplate = await addTemplate('./components/VuePage/VuePage.html')
const VuePage = {
    template: htmlTemplate,
    data() {
        return {
            title: 'Vue Example',
            subtitle: 'for learning',
            backgroundColor: 'white',
            hide: false
        }
    },
    methods: {
        makeBackground(color) {
            this.backgroundColor = color
        },
        changeTitle(e) {
            this.title = e.target.value
        }
    },
    components: {
        'vue-button':VueButton
    }
}
export default VuePage
