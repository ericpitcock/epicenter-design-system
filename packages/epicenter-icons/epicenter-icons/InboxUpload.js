import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.5 13H8.5V13.5C8.5 15.433 10.067 17 12 17C13.933 17 15.5 15.433 15.5 13.5V13H21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V19.5C2.5 20.6046 3.39543 21.5 4.5 21.5H19.5C20.6046 21.5 21.5 20.6046 21.5 19.5V4.5C21.5 3.39543 20.6046 2.5 19.5 2.5H17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.5 5L12 2.5L14.5 5M12 10V3.10878', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'InboxUpload',
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
