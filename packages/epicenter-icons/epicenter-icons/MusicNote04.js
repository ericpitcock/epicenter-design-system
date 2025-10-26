import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '8', 'cy': '17', 'r': '4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 17V3C14.3333 3 19.2 4.4 20 10C19 9 15 7 12 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MusicNote04',
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
