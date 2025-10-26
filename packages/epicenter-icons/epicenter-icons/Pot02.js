import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2 10H22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M4 10L4.75196 18.2716C4.89244 19.8168 6.18803 21 7.73964 21H16.2604C17.812 21 19.1076 19.8168 19.248 18.2716L20 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M4 8L20 3.5M15 4.90625L13.8889 3.49422C13.6512 3.19213 13.2613 3.05303 12.8861 3.13642L9.78307 3.82598C9.32553 3.92766 9 4.33347 9 4.80217V6.59375', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Pot02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
