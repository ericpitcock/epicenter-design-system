import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3 3L21 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.4866 20.001H8.49328M5.5 20.001H8.49328M12.5 4H18.0017C18.6508 4 19.127 4.61122 18.9698 5.24231L18.781 6M12.5 4L11.5868 7.59996M12.5 4H8M8.49328 20.001L10.7075 11.1248', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'TextItalicSlash',
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
