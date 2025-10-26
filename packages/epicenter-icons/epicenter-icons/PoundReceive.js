import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17.5 15.5L15 13L17.5 10.5M21.5 13H15.6088', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8.5 13C6.01472 13 4 10.9853 4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5M8.5 13H10.5M8.5 13H7.5M14.5 19L14.0077 19.3282C13.3506 19.7662 12.5786 20 11.7889 20H3C6 18 7.5 14.5 7.5 13M2.5 13H7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PoundReceive',
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
