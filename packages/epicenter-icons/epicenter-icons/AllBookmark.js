import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4 21.5V6.5C4 5.94772 4.44772 5.5 5 5.5H16C16.5523 5.5 17 5.94772 17 6.5V21.5L10.5 17.5L4 21.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 2.5H18C19.1046 2.5 20 3.39543 20 4.5V18.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AllBookmark',
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
