import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M3.5 9.5H20.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15.5 6L17.5 6', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M20.5 19.5V4.5C20.5 3.39543 19.6046 2.5 18.5 2.5H5.5C4.39543 2.5 3.5 3.39543 3.5 4.5V19.5C3.5 20.6046 4.39543 21.5 5.5 21.5H18.5C19.6046 21.5 20.5 20.6046 20.5 19.5Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 13.5H8M16 13.5H17M12.5 13.5H11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M7 17.5H8M16 17.5H17M12.5 17.5H11.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Calculator01',
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
