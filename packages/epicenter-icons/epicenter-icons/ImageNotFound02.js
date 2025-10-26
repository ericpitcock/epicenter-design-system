import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 2L22 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M21 17V5C21 3.89543 20.1046 3 19 3H7M3.5 3.67709C3.18882 4.02965 3 4.49278 3 5V19C3 20.1046 3.89543 21 5 21H19C19.5072 21 19.9703 20.8112 20.3229 20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15 21C14.52 18.6471 13.1696 16.5596 11.346 15.1968C9.09568 13.5152 6.36 13 3 13', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M13.5 17.5C14.3097 16.906 15 16.5 16 16', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'ImageNotFound02',
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
