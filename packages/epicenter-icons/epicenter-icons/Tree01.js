import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 22V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 17.4185C6.06817 16.2317 4 13.3574 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 13.3574 17.9318 16.2317 15 17.4185', 'stroke-linecap': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 15L14.5 12.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 13L9.5 10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M10 22H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Tree01',
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
            _hoisted4,
            _hoisted5
        ])
    }
})
