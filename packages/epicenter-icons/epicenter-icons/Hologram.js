import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M17 19L15.3333 15M8.66667 15L7 19M12 16.3333V19', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 7V12.5874M12 7L7.37664 4.68832M12 7L16.6234 4.68832M7 4.5L12 2L17 4.5V10.5L12 13L7 10.5V4.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 22H21', 'stroke-linecap': 'round' })

export default defineComponent({
    name: 'Hologram',
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
