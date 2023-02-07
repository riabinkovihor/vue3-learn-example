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
            hide: false,
            list: [],
            newItem: '',
            itemId: 5
        }
    },
    methods: {
        makeBackground(color) {
            this.backgroundColor = color
        },
        changeTitle(e) {
            this.title = e.target.value
        },
        addNewItem() {
            this.itemId = this.itemId + 1
            this.list = [...this.list,{
                id: this.itemId,
                content: this.newItem
            }]
            this.newItem = ''
        },
        deleteItem(id) {
            this.list = this.list.filter(item => item.id !== id)
        }
    },
    computed: {
      sortedList() {
          return this.list.sort((a,b) => b.content.toLowerCase() - a.content.toLowerCase())
      }
    },
    components: {
        'vue-button':VueButton
    },
    mounted() {
        for (let i = 1; i < this.itemId; i++) {
            this.list.push({
                id: i,
                content: `Item-${i}`
            })
        }
    }
}
export default VuePage
