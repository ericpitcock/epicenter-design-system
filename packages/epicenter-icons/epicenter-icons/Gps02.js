import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 12H20M4 12H2M12 2V4M12 20V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Gps02',
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
