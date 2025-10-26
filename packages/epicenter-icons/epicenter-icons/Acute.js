import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 2L3 20H21M14 2L11 2.5M14 2L15 4.5M21 20L19 18M21 20L19 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7.5 12.5028C10.3377 12.9839 12.5 14.9777 12.5 17.9818C12.5 18.6905 12.3797 19.3707 12.1586 20.0028', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Acute',
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
