import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 6H12C12.5523 6 13.0026 6.44637 12.9787 6.99814C12.8041 11.0259 11.4478 16.8238 5 19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 3V12M16 21V12M16 12H19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'AlphabetKorean',
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
