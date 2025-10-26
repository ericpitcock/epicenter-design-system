import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M4.00012 13.9C4.00012 8 12.0001 2.00005 12.0001 2.00005C12.0001 2.00005 20 8 20 13.91C20 18.37 16.4149 22 12.0001 22C7.58531 22 4.00012 18.36 4.00012 13.9Z', 'stroke-linejoin': 'round', 'stroke-miterlimit': '10' })
const _hoisted2 = h('path', { 'd': 'M12 2V22M12 19L20 15M12 14.1806L19 10.5M12 9.36145L16.5727 7', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Blur',
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
