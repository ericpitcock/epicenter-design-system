import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M21.857 12.6424C21.9514 12.8786 22 13.1307 22 13.3852V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V13.3852', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 13H7L9 15H15L17 13H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Archive04',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
