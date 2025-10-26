import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M10.5 19L8 18L3.31623 19.5613C2.6687 19.7771 2 19.2951 2 18.6126V6.61803C2 6.23926 2.214 5.893 2.55279 5.72361L7.58517 3.20742C7.84826 3.07587 8.15593 3.06683 8.4263 3.1827L15 6H21C21.5523 6 22 6.44772 22 7V11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 3L8 18', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 6V12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M14 18.5V21H16.5L22 15.5L19.5 13L14 18.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MapsEditing',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4
        ])
    }
})
